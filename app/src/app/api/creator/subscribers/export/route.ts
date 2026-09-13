import { NextResponse } from "next/server";

import { getCurrentUser } from "@/lib/auth";
import prisma from "@/lib/prisma";

function csvField(value: string): string {
  return `"${value.replace(/"/g, '""')}"`;
}

/**
 * The creator-owned-audience payoff: every email captured on this
 * creator's page (EmailSubscriber), as a plain CSV a creator can import
 * into any real mailing list tool — this app doesn't send email itself.
 */
export async function GET() {
  const user = await getCurrentUser();
  if (!user?.creatorProfile) {
    return NextResponse.json({ error: "You must be a creator to export subscribers." }, { status: 401 });
  }

  const subscribers = await prisma.emailSubscriber.findMany({
    where: { creatorId: user.creatorProfile.id },
    orderBy: { createdAt: "asc" },
  });

  const rows = [
    "email,captured_at",
    ...subscribers.map((s) => `${csvField(s.email)},${csvField(s.createdAt.toISOString())}`),
  ];
  const csv = rows.join("\n") + "\n";

  return new NextResponse(csv, {
    headers: {
      "Content-Type": "text/csv",
      "Content-Disposition": `attachment; filename="${user.creatorProfile.handle}-subscribers.csv"`,
    },
  });
}
