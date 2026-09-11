import { createReadStream } from "node:fs";
import { stat } from "node:fs/promises";
import { Readable } from "node:stream";
import path from "node:path";

import { NextResponse } from "next/server";

import { verifyFileToken } from "@/lib/file-signing";

const PRIVATE_UPLOAD_DIR = path.join(process.cwd(), "private-uploads");

const CONTENT_TYPE_BY_EXTENSION: Record<string, string> = {
  mp4: "video/mp4",
  webm: "video/webm",
  mov: "video/quicktime",
  ogv: "video/ogg",
  pdf: "application/pdf",
  doc: "application/msword",
  docx: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  odt: "application/vnd.oasis.opendocument.text",
  xls: "application/vnd.ms-excel",
  xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  ods: "application/vnd.oasis.opendocument.spreadsheet",
  ppt: "application/vnd.ms-powerpoint",
  pptx: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
  odp: "application/vnd.oasis.opendocument.presentation",
  rtf: "application/rtf",
  txt: "text/plain",
  csv: "text/csv",
  zip: "application/zip",
  png: "image/png",
  jpg: "image/jpeg",
  jpeg: "image/jpeg",
  gif: "image/gif",
  webp: "image/webp",
  mp3: "audio/mpeg",
  wav: "audio/wav",
  m4a: "audio/mp4",
};

/**
 * Serves a paid file (Behind the Cut's raw footage/cut scenes, Video
 * Extras' outtakes/attachments) — the only way to reach one, since they're
 * stored outside `public/` (see PRIVATE_UPLOAD_DIR in video-storage.ts).
 * The token itself, minted by src/lib/file-signing.ts, is the entire
 * access control: it's only ever generated server-side for a viewer who
 * already passed the real check (owner, subscriber, or a recorded
 * unlock), and it expires on its own. Range support is for video
 * scrubbing — without it `<video>` has to download the whole file before
 * seeking works.
 */
export async function GET(request: Request, { params }: { params: Promise<{ token: string }> }) {
  const { token } = await params;
  const verified = verifyFileToken(token);
  if (!verified) {
    return NextResponse.json({ error: "This link has expired." }, { status: 403 });
  }

  const filePath = path.join(PRIVATE_UPLOAD_DIR, verified.relativePath);
  if (!filePath.startsWith(PRIVATE_UPLOAD_DIR + path.sep)) {
    return NextResponse.json({ error: "Invalid file reference." }, { status: 400 });
  }

  let fileStat;
  try {
    fileStat = await stat(filePath);
  } catch {
    return NextResponse.json({ error: "File not found." }, { status: 404 });
  }

  const extension = verified.relativePath.split(".").pop()?.toLowerCase() ?? "";
  const contentType = CONTENT_TYPE_BY_EXTENSION[extension] ?? "application/octet-stream";

  const baseHeaders = {
    "Content-Type": contentType,
    "Cache-Control": "private, max-age=0, no-store",
    "Accept-Ranges": "bytes",
  };

  const range = request.headers.get("range");
  if (range) {
    const match = /^bytes=(\d+)-(\d*)$/.exec(range);
    if (match) {
      const start = Number(match[1]);
      const end = match[2] ? Number(match[2]) : fileStat.size - 1;
      if (start < fileStat.size && end < fileStat.size && start <= end) {
        const stream = createReadStream(filePath, { start, end });
        return new NextResponse(Readable.toWeb(stream) as ReadableStream, {
          status: 206,
          headers: {
            ...baseHeaders,
            "Content-Range": `bytes ${start}-${end}/${fileStat.size}`,
            "Content-Length": String(end - start + 1),
          },
        });
      }
    }
  }

  const stream = createReadStream(filePath);
  return new NextResponse(Readable.toWeb(stream) as ReadableStream, {
    status: 200,
    headers: { ...baseHeaders, "Content-Length": String(fileStat.size) },
  });
}
