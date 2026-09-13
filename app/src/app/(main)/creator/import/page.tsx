import Link from "next/link";
import { redirect } from "next/navigation";

import { getCurrentUser } from "@/lib/auth";
import BulkImportForm from "@/components/bulk-import-form";

export default async function BulkImportPage() {
  const user = await getCurrentUser();
  if (!user) redirect("/login");
  if (!user.creatorProfile) redirect("/creator/setup");

  return (
    <div className="mx-auto max-w-xl px-6 py-10">
      <h1 className="text-2xl font-semibold tracking-tight">Import your back catalog</h1>
      <p className="mt-2 text-sm text-zinc-500">
        Already have videos hosted somewhere — your own site, a CDN, an old feed? Bring them all
        over at once instead of{" "}
        <Link href="/creator/upload" className="underline">
          posting one at a time
        </Link>
        .
      </p>

      <div className="mt-6">
        <BulkImportForm />
      </div>
    </div>
  );
}
