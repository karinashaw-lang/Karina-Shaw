import "../globals.css";

/**
 * A second root layout (Next.js supports multiple root layouts via route
 * groups) for anything meant to live inside someone else's page as an
 * <iframe> — no nav, no site chrome, just the content. See
 * src/app/(embed)/embed/moments/[id]/page.tsx.
 */
export default function EmbedLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full bg-white dark:bg-black">{children}</body>
    </html>
  );
}
