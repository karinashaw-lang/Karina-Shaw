import Link from "next/link";
import { redirect } from "next/navigation";

import { getCurrentUser } from "@/lib/auth";
import { isMuxConfigured } from "@/lib/integrations/mux";
import UploadForm from "@/components/upload-form";

export default async function UploadPage() {
  const user = await getCurrentUser();
  if (!user) redirect("/login");
  if (!user.creatorProfile) redirect("/creator/setup");

  return (
    <div className="mx-auto max-w-sm px-6 py-10">
      <h1 className="text-2xl font-semibold tracking-tight">Upload a video</h1>
      <p className="mt-1 text-xs text-zinc-500">
        Got a back catalog already hosted somewhere?{" "}
        <Link href="/creator/import" className="underline">
          Import it in bulk
        </Link>{" "}
        instead.
      </p>
      <UploadForm
        hasSubscriptionPrice={user.creatorProfile.subscriptionPriceCents !== null}
        muxConfigured={isMuxConfigured()}
      />
    </div>
  );
}
