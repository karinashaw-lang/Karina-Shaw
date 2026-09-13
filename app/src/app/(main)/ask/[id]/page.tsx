import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import prisma from "@/lib/prisma";
import type { AskSource } from "@/lib/actions/ask";
import { getAppUrl } from "@/lib/app-url";
import JsonLd from "@/components/json-ld";

function formatTime(totalSeconds: number) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = Math.floor(totalSeconds % 60);
  return `${minutes}:${String(seconds).padStart(2, "0")}`;
}

async function getAskedQuestion(id: string) {
  return prisma.askedQuestion.findUnique({
    where: { id },
    include: { creator: true },
  });
}

export async function generateMetadata(props: PageProps<"/ask/[id]">): Promise<Metadata> {
  const { id } = await props.params;
  const asked = await getAskedQuestion(id);
  if (!asked) return {};

  const appUrl = await getAppUrl();
  const url = `${appUrl}/ask/${asked.id}`;
  const description = asked.answer ?? asked.question;

  return {
    title: `${asked.question} — ${asked.creator.displayName}`,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: asked.question,
      description,
      url,
      siteName: "Creator Platform",
      type: "article",
    },
    twitter: {
      card: "summary",
      title: asked.question,
      description,
    },
  };
}

export default async function AskedQuestionPage(props: PageProps<"/ask/[id]">) {
  const { id } = await props.params;
  const asked = await getAskedQuestion(id);
  if (!asked) notFound();

  const sources = asked.sourcesJson as unknown as AskSource[];

  return (
    <div className="mx-auto max-w-2xl px-6 py-10">
      {asked.answer && (
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "QAPage",
            mainEntity: {
              "@type": "Question",
              name: asked.question,
              answerCount: 1,
              acceptedAnswer: {
                "@type": "Answer",
                text: asked.answer,
              },
            },
          }}
        />
      )}
      <p className="text-sm text-zinc-500">
        Asked of{" "}
        <Link href={`/creators/${asked.creator.handle}`} className="underline">
          {asked.creator.displayName}
        </Link>
      </p>
      <h1 className="mt-1 text-2xl font-semibold tracking-tight">{asked.question}</h1>

      {asked.answer ? (
        <p className="mt-4">{asked.answer}</p>
      ) : (
        <p className="mt-4 text-sm text-zinc-500">
          No synthesized answer for this one — here&apos;s what matched in the catalog:
        </p>
      )}

      {sources.length > 0 && (
        <ul className="mt-4 flex flex-col gap-2 text-sm">
          {sources.map((source, i) => (
            <li key={source.segmentId}>
              <Link href={`/videos/${source.videoId}?t=${source.startSeconds}`} className="hover:underline">
                {asked.answer && <span className="mr-1 text-zinc-500">[{i + 1}]</span>}
                <span className="mr-2 text-zinc-500 tabular-nums">{formatTime(source.startSeconds)}</span>
                &ldquo;{source.text}&rdquo;
              </Link>
              <span className="ml-2 text-xs text-zinc-500">— {source.videoTitle}</span>
            </li>
          ))}
        </ul>
      )}

      <p className="mt-8 text-sm">
        <Link href={`/creators/${asked.creator.handle}`} className="underline">
          Ask {asked.creator.displayName} something else
        </Link>
      </p>
    </div>
  );
}
