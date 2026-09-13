import type { Metadata } from "next";

import ReportContentForm from "@/components/report-content-form";

export const metadata: Metadata = {
  title: "Report content",
  description: "Report a copyright or rights concern about content on Creator Platform.",
};

export default async function ReportContentPage(props: PageProps<"/report">) {
  const searchParams = await props.searchParams;
  const urlParam = Array.isArray(searchParams.url) ? searchParams.url[0] : searchParams.url;

  return (
    <div className="mx-auto max-w-xl px-6 py-10">
      <h1 className="text-2xl font-semibold tracking-tight">Report content</h1>
      <p className="mt-2 text-sm text-zinc-500">
        Use this form to report a video or moment you believe infringes your copyright, or
        otherwise violates your rights. We send the report directly to the creator who posted the
        content, who can take it down or respond. This form doesn&apos;t replace filing a formal
        DMCA notice with a hosting provider or court if the creator doesn&apos;t resolve it.
      </p>

      <div className="mt-6">
        <ReportContentForm prefillUrl={urlParam} />
      </div>
    </div>
  );
}
