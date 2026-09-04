import Link from "next/link";

import { getCurrentUser } from "@/lib/auth";
import { logout } from "@/lib/actions/auth";

export default async function Nav() {
  const user = await getCurrentUser();

  return (
    <header className="border-b border-black/10 dark:border-white/10">
      <nav className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-semibold tracking-tight">
          Creator Platform
        </Link>
        <div className="flex items-center gap-4 text-sm">
          {user ? (
            <>
              <Link href="/wall">Wall</Link>
              {user.creatorProfile ? (
                <>
                  <Link href={`/creators/${user.creatorProfile.handle}`}>
                    {user.creatorProfile.displayName}
                  </Link>
                  <Link href="/creator/upload">Upload</Link>
                  <Link href="/creator/dashboard">Dashboard</Link>
                </>
              ) : (
                <Link href="/creator/setup">Become a creator</Link>
              )}
              <form action={logout}>
                <button type="submit" className="cursor-pointer">
                  Log out
                </button>
              </form>
            </>
          ) : (
            <>
              <Link href="/login">Log in</Link>
              <Link href="/signup">Sign up</Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}
