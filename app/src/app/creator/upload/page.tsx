import { redirect } from "next/navigation";

import { getCurrentUser } from "@/lib/auth";
import UploadForm from "@/components/upload-form";

export default async function UploadPage() {
  const user = await getCurrentUser();
  if (!user) redirect("/login");
  if (!user.creatorProfile) redirect("/creator/setup");

  return (
    <div className="mx-auto max-w-sm px-6 py-10">
      <h1 className="text-2xl font-semibold tracking-tight">Upload a video</h1>
      <UploadForm hasSubscriptionPrice={user.creatorProfile.subscriptionPriceCents !== null} />
    </div>
  );
}
