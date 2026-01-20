import React from "react";
import { Link } from "react-router-dom";

const faqs = [
  {
    q: "How does it solve privacy?",
    a: "VibeWall is designed for anonymous sharing with encrypted storage and a short retention window, so users can express emotions without linking confessions to their identity.",
  },
  {
    q: "How does it hide a user’s data from other people?",
    a: "Confessions are stored and served without exposing personal identifiers, and access is controlled via server-side authorization. Other users only see the confession content—not who posted it.",
  },
  {
    q: "How long does a confession live?",
    a: "Confessions are automatically deleted after 12 hours (TTL). This minimizes long-term risk and keeps the platform truly temporary.",
  },
  {
    q: "What security is implemented?",
    a: "JWT-based authentication (access + refresh), role-based access control (RBAC), secure password hashing, report/moderation flows, and encrypted storage for sensitive content.",
  },
  {
    q: "How does server-side encryption prevent developers/admins from reading confessions?",
    a: "Encryption is applied before data is stored. Without the decryption key, raw database queries only return ciphertext—meaning the plaintext confession cannot be read directly from the DB.",
  },
  {
    q: "Can someone query the database to display every confession?",
    a: "They can retrieve encrypted records, but they still can’t turn ciphertext into readable text without the decryption key. Proper key management and restricted access are critical to maintain this guarantee.",
  },
];

function Documenents() {
  return (
    <main className="relative mx-auto max-w-6xl space-y-10 px-4 py-10 sm:px-6 sm:py-14">
      <header className="space-y-4">
        <p className="text-sm text-amber-300/80">~/vibewall $ docs --security --privacy</p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-emerald-300 leading-tight terminal-prompt">
          &gt;{" "}
          <span className="glitch" data-text="Docs_">
            Docs_
          </span>
          <span className="cursor-blink">█</span>
        </h1>
        <p className="max-w-3xl text-gray-300/80 leading-relaxed">
          A quick, no-fluff FAQ about how VibeWall keeps confessions anonymous, encrypted, and short-lived.
        </p>

        <div className="flex flex-wrap items-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-lg border border-emerald-400/40 bg-black/40 px-4 py-2 text-emerald-200/90 hover:text-emerald-100 hover:border-emerald-400/70 transition-colors"
          >
            ← Back to landing
          </Link>
          <span className="text-xs tracking-[0.25em] text-gray-500/70 uppercase">security notes</span>
        </div>
      </header>

      <section className="grid gap-4 md:grid-cols-2">
        {faqs.map((item, idx) => (
          <article
            key={idx}
            className="relative overflow-hidden rounded-2xl border border-emerald-500/20 bg-black/60 p-5"
          >
            <div className="pointer-events-none absolute inset-0 opacity-60 bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.10),_transparent_55%)]" />
            <div className="relative space-y-3">
              <div className="flex items-start justify-between gap-3">
                <h2 className="text-lg font-semibold text-emerald-200 leading-snug">
                  <span className={idx % 3 === 0 ? "glitch" : undefined} data-text={item.q}>
                    {item.q}
                  </span>
                </h2>
                <span className="text-xs text-amber-300/70 border border-amber-300/20 rounded-md px-2 py-1">
                  Q{idx + 1}
                </span>
              </div>
              <p className="text-gray-300/80 leading-relaxed">{item.a}</p>
              <div className="h-px w-full bg-gradient-to-r from-emerald-400/25 via-emerald-400/10 to-transparent" />
              <p className="text-xs text-gray-500/70">
                Note: exact guarantees depend on key management + access controls in deployment.
              </p>
            </div>
          </article>
        ))}
      </section>

      <section className="rounded-2xl border border-emerald-500/20 bg-black/60 p-6 code-block">
        <p className="text-xs tracking-[0.25em] text-amber-300/70 uppercase">tl;dr</p>
        <ul className="mt-4 space-y-2 text-gray-300/80">
          <li>
            <span className="text-emerald-200">-</span> Anonymous posting (no public identity binding)
          </li>
          <li>
            <span className="text-emerald-200">-</span> Encrypted storage (DB rows are not readable plaintext)
          </li>
          <li>
            <span className="text-emerald-200">-</span> 12h TTL (automatic deletion)
          </li>
          <li>
            <span className="text-emerald-200">-</span> Auth + RBAC + moderation/reporting
          </li>
        </ul>
      </section>
    </main>
  );
}

export default Documenents;
