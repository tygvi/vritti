"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "loading" | "success" | "error";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!EMAIL_RE.test(email.trim())) {
      setStatus("error");
      return;
    }

    setStatus("loading");

    // TODO: wire this to a real waitlist endpoint (e.g. a Route Handler + DB
    // or a form service) once the backend is in place.
    await new Promise((resolve) => setTimeout(resolve, 600));

    setStatus("success");
    setEmail("");
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="rounded-2xl border border-teal/30 bg-teal/5 px-6 py-5 text-center"
      >
        <p className="font-serif text-lg text-ink">You&apos;re on the list.</p>
        <p className="mt-1 text-sm text-muted">
          We&apos;ll email you the moment Vritti opens up.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full" noValidate>
      <div className="flex flex-col gap-2 sm:flex-row">
        <label htmlFor="waitlist-email" className="sr-only">
          Email address
        </label>
        <input
          id="waitlist-email"
          type="email"
          autoComplete="email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
            if (status === "error") setStatus("idle");
          }}
          placeholder="you@example.com"
          aria-invalid={status === "error"}
          className="w-full flex-1 rounded-xl border border-line bg-cream px-4 py-3 text-ink outline-none placeholder:text-muted/70 focus:border-saffron/60"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="rounded-xl bg-ink px-6 py-3 font-medium text-sand transition hover:bg-ink/90 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "loading" ? "Joining…" : "Join waitlist"}
        </button>
      </div>
      {status === "error" ? (
        <p role="alert" className="mt-2 text-sm text-saffron">
          Please enter a valid email address.
        </p>
      ) : (
        <p className="mt-2 text-xs text-muted">
          Free to join. No spam — just launch news and early access.
        </p>
      )}
    </form>
  );
}
