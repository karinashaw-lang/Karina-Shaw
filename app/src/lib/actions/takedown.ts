"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";

import { getCurrentUser } from "@/lib/auth";
import prisma from "@/lib/prisma";

function extractTarget(rawUrl: string): { targetType: "VIDEO" | "MOMENT"; targetId: string } | null {
  let pathname: string;
  try {
    pathname = new URL(rawUrl).pathname;
  } catch {
    // Also accept a bare path like "/moments/abc123" rather than requiring
    // a full URL — reporters often paste just what's in the address bar.
    pathname = rawUrl;
  }
  const momentMatch = pathname.match(/\/moments\/([^/?#]+)/);
  if (momentMatch) return { targetType: "MOMENT", targetId: momentMatch[1] };
  const videoMatch = pathname.match(/\/videos\/([^/?#]+)/);
  if (videoMatch) return { targetType: "VIDEO", targetId: videoMatch[1] };
  return null;
}

const submitSchema = z.object({
  infringingUrl: z.string().min(1, "Paste the link to the content you're reporting."),
  reporterName: z.string().min(1, "Your name is required.").max(200),
  reporterEmail: z.string().email("Enter a valid email address."),
  workDescription: z.string().min(10, "Describe the work being infringed in a bit more detail.").max(2000),
  goodFaithStatement: z.literal("on", { message: "You must confirm the good-faith statement." }),
  accuracyStatement: z.literal("on", { message: "You must confirm the accuracy statement." }),
});

export type SubmitTakedownState = { error: string } | { success: true } | null;

/**
 * A public rights/copyright complaint form — no account needed, matching
 * how a real DMCA notice works (anyone can file one). Resolves the
 * reported link to a video or moment and routes the request to that
 * content's own creator; see TakedownRequest's doc comment in
 * schema.prisma for why there's no separate admin queue.
 */
export async function submitTakedownRequest(
  _prevState: SubmitTakedownState,
  formData: FormData
): Promise<SubmitTakedownState> {
  const parsed = submitSchema.safeParse({
    infringingUrl: formData.get("infringingUrl"),
    reporterName: formData.get("reporterName"),
    reporterEmail: formData.get("reporterEmail"),
    workDescription: formData.get("workDescription"),
    goodFaithStatement: formData.get("goodFaithStatement"),
    accuracyStatement: formData.get("accuracyStatement"),
  });
  if (!parsed.success) {
    return { error: parsed.error.issues[0]?.message ?? "Please fill in every field." };
  }

  const target = extractTarget(parsed.data.infringingUrl);
  if (!target) {
    return { error: "That doesn't look like a link to a video or moment on this site." };
  }

  const creatorId =
    target.targetType === "VIDEO"
      ? (await prisma.video.findUnique({ where: { id: target.targetId }, select: { creatorId: true } }))
          ?.creatorId
      : (
          await prisma.curatedMoment.findUnique({
            where: { id: target.targetId },
            select: { video: { select: { creatorId: true } } },
          })
        )?.video.creatorId;

  if (!creatorId) {
    return { error: "Couldn't find that content — double-check the link." };
  }

  await prisma.takedownRequest.create({
    data: {
      targetType: target.targetType,
      targetId: target.targetId,
      creatorId,
      reporterName: parsed.data.reporterName,
      reporterEmail: parsed.data.reporterEmail,
      workDescription: parsed.data.workDescription,
      infringingUrl: parsed.data.infringingUrl,
    },
  });

  return { success: true };
}

const resolveSchema = z.object({
  takedownRequestId: z.string().min(1),
  action: z.enum(["remove", "dismiss"]),
  note: z.string().max(1000).optional(),
});

export type ResolveTakedownState = { error: string } | { success: true } | null;

/**
 * The content owner's response to a report against their own content —
 * "remove" actually takes the content down (Video.removedAt, or
 * DISMISSED for a moment, reusing the same field a creator's own retract
 * button uses); "dismiss" just closes the request with a note.
 */
export async function resolveTakedownRequest(
  _prevState: ResolveTakedownState,
  formData: FormData
): Promise<ResolveTakedownState> {
  const user = await getCurrentUser();
  if (!user?.creatorProfile) return { error: "You must be a creator to do this." };

  const parsed = resolveSchema.safeParse({
    takedownRequestId: formData.get("takedownRequestId"),
    action: formData.get("action"),
    note: formData.get("note") || undefined,
  });
  if (!parsed.success) return { error: parsed.error.issues[0]?.message ?? "Invalid request." };

  const request = await prisma.takedownRequest.findUnique({ where: { id: parsed.data.takedownRequestId } });
  if (!request || request.creatorId !== user.creatorProfile.id) {
    return { error: "You can only respond to reports about your own content." };
  }
  if (request.status !== "PENDING") {
    return { error: "This report was already resolved." };
  }

  if (parsed.data.action === "remove") {
    if (request.targetType === "VIDEO") {
      await prisma.video.update({ where: { id: request.targetId }, data: { removedAt: new Date() } });
    } else {
      await prisma.curatedMoment.update({ where: { id: request.targetId }, data: { status: "DISMISSED" } });
    }
  }

  await prisma.takedownRequest.update({
    where: { id: request.id },
    data: {
      status: parsed.data.action === "remove" ? "REMOVED" : "DISMISSED",
      resolutionNote: parsed.data.note ?? null,
      resolvedAt: new Date(),
    },
  });

  revalidatePath("/creator/dashboard");
  if (request.targetType === "VIDEO") revalidatePath(`/videos/${request.targetId}`);
  if (request.targetType === "MOMENT") revalidatePath(`/moments/${request.targetId}`);

  return { success: true };
}
