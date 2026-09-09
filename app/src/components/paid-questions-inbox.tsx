"use client";

import { useActionState } from "react";

import { markQuestionAnswered } from "@/lib/actions/paid-question";

type Question = {
  id: string;
  question: string;
  amountCents: number;
  status: "PENDING" | "ANSWERED";
  fromUser: { name: string };
  answeredVideo: { id: string; title: string } | null;
};

function AnswerForm({ questionId, videos }: { questionId: string; videos: { id: string; title: string }[] }) {
  const [state, formAction, pending] = useActionState(markQuestionAnswered, null);

  return (
    <form action={formAction} className="mt-1 flex flex-wrap items-center gap-2">
      <input type="hidden" name="paidQuestionId" value={questionId} />
      {videos.length > 0 && (
        <select name="answeredVideoId" className="rounded border border-black/20 px-2 py-1 text-xs dark:border-white/20">
          <option value="">Link a video (optional)</option>
          {videos.map((v) => (
            <option key={v.id} value={v.id}>
              {v.title}
            </option>
          ))}
        </select>
      )}
      <button
        type="submit"
        disabled={pending}
        className="rounded border border-black/20 px-2.5 py-1 text-xs disabled:opacity-50 dark:border-white/20"
      >
        {pending ? "Saving…" : "Mark answered"}
      </button>
      {state && "error" in state && <span className="text-xs text-red-600">{state.error}</span>}
    </form>
  );
}

export default function PaidQuestionsInbox({
  questions,
  videos,
}: {
  questions: Question[];
  videos: { id: string; title: string }[];
}) {
  const pending = questions.filter((q) => q.status === "PENDING");
  const answered = questions.filter((q) => q.status === "ANSWERED");

  return (
    <div>
      <h3 className="text-sm font-medium text-zinc-500">Pending</h3>
      {pending.length === 0 ? (
        <p className="mt-1 text-sm text-zinc-500">No pending questions.</p>
      ) : (
        <ul className="mt-2 flex flex-col gap-3 text-sm">
          {pending.map((q) => (
            <li key={q.id} className="rounded border border-black/10 p-3 dark:border-white/10">
              <p>
                <span className="font-medium">{q.fromUser.name}</span> paid $
                {(q.amountCents / 100).toFixed(2)}: &ldquo;{q.question}&rdquo;
              </p>
              <AnswerForm questionId={q.id} videos={videos} />
            </li>
          ))}
        </ul>
      )}

      {answered.length > 0 && (
        <>
          <h3 className="mt-4 text-sm font-medium text-zinc-500">Answered</h3>
          <ul className="mt-2 flex flex-col gap-2 text-sm">
            {answered.map((q) => (
              <li key={q.id}>
                <span className="font-medium">{q.fromUser.name}</span>: &ldquo;{q.question}&rdquo;
                {q.answeredVideo && <> — see it in {q.answeredVideo.title}</>}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
