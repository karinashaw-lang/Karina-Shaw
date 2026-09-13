"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";

import { getCurrentUser } from "@/lib/auth";
import prisma from "@/lib/prisma";

const MAX_ROWS = 200;

const rowSchema = z.object({
  title: z.string().min(1, "Title is required.").max(120, "Title is too long (120 characters max)."),
  url: z.string().url("Not a valid URL."),
  description: z.string().max(2000, "Description is too long (2000 characters max).").optional(),
});

/**
 * Splits one line into title/url/description. Detects a tab first (the
 * shape pasting straight out of Google Sheets/Excel produces) and falls
 * back to comma otherwise. Either way, everything after the second field
 * is rejoined with the same delimiter to reconstruct the description —
 * so a description containing commas survives even in comma mode,
 * as long as the title and URL themselves don't contain the delimiter.
 */
function parseRow(line: string): { title: string; url: string; description?: string } | null {
  const delimiter = line.includes("\t") ? "\t" : ",";
  const parts = line.split(delimiter);
  const title = parts[0]?.trim();
  const url = parts[1]?.trim();
  if (!title || !url) return null;
  const description = parts.slice(2).join(delimiter).trim();
  return { title, url, description: description || undefined };
}

export type BulkImportState =
  | { error: string }
  | { success: true; imported: number; skipped: { line: number; reason: string }[] }
  | null;

/**
 * Bulk back-catalog import (Phase 5's "do first" moat build) — a creator
 * pastes a spreadsheet-style list of already-hosted videos and gets them
 * all posted at once, instead of one upload form submission per video.
 * Deliberately URL-only, reusing the same "paste a URL" path the regular
 * upload form already has (Video.videoUrl set directly, status READY) —
 * no file uploads here, so no new storage/processing work is needed to
 * build this. A creator with videos already hosted elsewhere (their own
 * site, a CDN they already pay for) is exactly who this is for.
 */
export async function bulkImportVideos(
  _prevState: BulkImportState,
  formData: FormData
): Promise<BulkImportState> {
  const user = await getCurrentUser();
  if (!user?.creatorProfile) {
    return { error: "You need a creator profile before you can import videos." };
  }

  const raw = (formData.get("rows") as string | null) ?? "";
  const allLines = raw.split("\n");
  const nonEmptyCount = allLines.filter((l) => l.trim().length > 0).length;

  if (nonEmptyCount === 0) {
    return { error: "Paste at least one row: title, video URL, and an optional description." };
  }
  if (nonEmptyCount > MAX_ROWS) {
    return { error: `That's ${nonEmptyCount} rows — import at most ${MAX_ROWS} at a time, in batches.` };
  }

  const toCreate: { title: string; description?: string; videoUrl: string }[] = [];
  const skipped: { line: number; reason: string }[] = [];
  let sawFirstRow = false;

  allLines.forEach((line, index) => {
    if (!line.trim()) return;
    const parsed = parseRow(line);

    // A header row copy-pasted along with the data ("Title, URL, ...") is
    // common enough to special-case rather than making every creator strip
    // it themselves first.
    if (!sawFirstRow) {
      sawFirstRow = true;
      if (parsed?.title.toLowerCase() === "title") return;
    }

    if (!parsed) {
      skipped.push({ line: index + 1, reason: "Couldn't find both a title and a URL on this line." });
      return;
    }

    const validated = rowSchema.safeParse(parsed);
    if (!validated.success) {
      skipped.push({ line: index + 1, reason: validated.error.issues[0]?.message ?? "Invalid row." });
      return;
    }

    toCreate.push({
      title: validated.data.title,
      description: validated.data.description,
      videoUrl: validated.data.url,
    });
  });

  if (toCreate.length > 0) {
    await prisma.video.createMany({
      data: toCreate.map((v) => ({
        creatorId: user.creatorProfile!.id,
        title: v.title,
        description: v.description,
        videoUrl: v.videoUrl,
      })),
    });
    revalidatePath(`/creators/${user.creatorProfile.handle}`);
  }

  return { success: true, imported: toCreate.length, skipped };
}
