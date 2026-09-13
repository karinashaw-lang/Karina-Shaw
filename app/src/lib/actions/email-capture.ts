"use server";

import { z } from "zod";

import prisma from "@/lib/prisma";

const subscribeSchema = z.object({
  creatorId: z.string().min(1),
  email: z.string().email("Enter a valid email address."),
});

export type SubscribeEmailState = { error: string } | { success: true } | null;

/**
 * Captures a viewer's email directly on a creator's page — the plan's
 * "creator-owned audience," kept independent of a platform account. No
 * account, no payment, just an opt-in — re-submitting the same email is a
 * silent no-op (upsert) rather than an error, since a viewer clicking
 * "Notify me" twice isn't a mistake worth surfacing.
 */
export async function subscribeEmail(
  _prevState: SubscribeEmailState,
  formData: FormData
): Promise<SubscribeEmailState> {
  const parsed = subscribeSchema.safeParse({
    creatorId: formData.get("creatorId"),
    email: formData.get("email"),
  });
  if (!parsed.success) {
    return { error: parsed.error.issues[0]?.message ?? "Enter a valid email address." };
  }

  const creator = await prisma.creatorProfile.findUnique({ where: { id: parsed.data.creatorId } });
  if (!creator) return { error: "Creator not found." };

  const email = parsed.data.email.trim().toLowerCase();

  await prisma.emailSubscriber.upsert({
    where: { creatorId_email: { creatorId: creator.id, email } },
    create: { creatorId: creator.id, email },
    update: {},
  });

  return { success: true };
}
