"use client";

import { useState } from "react";

export default function LeadForm({ source = "contact" }: { source?: string }) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, source }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-2xl bg-olive/15 border border-olive/30 p-6 text-center">
        <p className="font-display text-xl text-navy">Got it &mdash; thanks!</p>
        <p className="text-sm text-navy/70 mt-1">Lance will be in touch shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <input
        name="name"
        required
        placeholder="Full name"
        className="rounded-xl border border-navy/20 bg-white px-4 py-3 text-navy placeholder:text-navy/40 focus:outline-none focus:ring-2 focus:ring-terracotta"
      />
      <input
        name="email"
        type="email"
        required
        placeholder="Email"
        className="rounded-xl border border-navy/20 bg-white px-4 py-3 text-navy placeholder:text-navy/40 focus:outline-none focus:ring-2 focus:ring-terracotta"
      />
      <input
        name="phone"
        type="tel"
        placeholder="Phone (optional)"
        className="rounded-xl border border-navy/20 bg-white px-4 py-3 text-navy placeholder:text-navy/40 focus:outline-none focus:ring-2 focus:ring-terracotta"
      />
      <textarea
        name="message"
        rows={4}
        placeholder="What can Lance help with?"
        className="rounded-xl border border-navy/20 bg-white px-4 py-3 text-navy placeholder:text-navy/40 focus:outline-none focus:ring-2 focus:ring-terracotta"
      />
      <button
        type="submit"
        disabled={status === "sending"}
        className="rounded-full bg-terracotta text-cream px-6 py-3 text-sm font-semibold hover:bg-navy transition-colors disabled:opacity-60"
      >
        {status === "sending" ? "Sending\u2026" : "Send to Lance"}
      </button>
      {status === "error" && (
        <p className="text-sm text-terracotta">Something went wrong &mdash; try again or email lance@homesbylance.com directly.</p>
      )}
    </form>
  );
}
