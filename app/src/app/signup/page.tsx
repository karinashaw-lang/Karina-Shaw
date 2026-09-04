"use client";

import { useActionState } from "react";
import Link from "next/link";

import { signup } from "@/lib/actions/auth";

export default function SignupPage() {
  const [state, formAction, pending] = useActionState(signup, null);

  return (
    <div className="mx-auto max-w-sm px-6 py-10">
      <h1 className="text-2xl font-semibold tracking-tight">Sign up</h1>

      <form action={formAction} className="mt-6 flex flex-col gap-4">
        <label className="flex flex-col gap-1 text-sm">
          Name
          <input
            name="name"
            type="text"
            required
            className="rounded border border-black/20 px-3 py-2 dark:border-white/20"
          />
        </label>
        <label className="flex flex-col gap-1 text-sm">
          Email
          <input
            name="email"
            type="email"
            required
            className="rounded border border-black/20 px-3 py-2 dark:border-white/20"
          />
        </label>
        <label className="flex flex-col gap-1 text-sm">
          Password
          <input
            name="password"
            type="password"
            required
            minLength={8}
            className="rounded border border-black/20 px-3 py-2 dark:border-white/20"
          />
        </label>

        {state?.error && <p className="text-sm text-red-600">{state.error}</p>}

        <button
          type="submit"
          disabled={pending}
          className="rounded bg-black px-4 py-2 text-white disabled:opacity-50 dark:bg-white dark:text-black"
        >
          {pending ? "Creating account…" : "Create account"}
        </button>
      </form>

      <p className="mt-4 text-sm text-zinc-500">
        Already have an account?{" "}
        <Link href="/login" className="underline">
          Log in
        </Link>
      </p>
    </div>
  );
}
