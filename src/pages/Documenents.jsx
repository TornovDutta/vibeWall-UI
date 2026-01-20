import React from "react";
import { Link } from "react-router-dom";

const faqs = [
  {
    q: "What real-world problem does VibeWall solve at a system level?",
    a: "VibeWall addresses the risk of long-term storage of sensitive emotional data. Traditional platforms retain user-generated content indefinitely, increasing exposure during breaches. VibeWall minimizes both identity linkage and data lifespan to reduce impact under failure scenarios.",
  },
  {
    q: "Why did you choose server-side encryption instead of relying only on database security?",
    a: "Database-level security assumes infrastructure is never compromised. Server-side encryption protects data even if access controls fail, addressing insider threats, misconfiguration, or data exfiltration scenarios.",
  },
  {
    q: "What threat model does server-side encryption protect against?",
    a: "It protects against database leaks, unauthorized admin access, backup exposure, and read-only breaches where attackers gain data access but not application-level keys.",
  },
  {
    q: "Why did you implement time-based deletion instead of user-controlled deletion?",
    a: "User-controlled deletion is inconsistent and relies on correct user behavior. Time-based deletion enforces data minimization by default, ensuring sensitive data does not accumulate unintentionally.",
  },
  {
    q: "Why is the expiration window set to 12 hours?",
    a: "Twelve hours balances usability and risk. It allows sufficient interaction while keeping the exposure window short enough to limit damage if data is compromised.",
  },
  {
    q: "How does short data retention improve system security?",
    a: "It limits the volume of sensitive data available at any point in time, reduces breach impact, simplifies compliance, and prevents historical data correlation or profiling.",
  },
  {
    q: "Why use Redis caching if the data is sensitive?",
    a: "Redis improves read performance and scalability. To maintain privacy, cached data uses strict TTLs synchronized with database expiration, ensuring caching does not extend data lifetime.",
  },
  {
    q: "Why use JWT-based authentication instead of server sessions?",
    a: "JWTs enable stateless authentication, reducing server memory usage and session fixation risks. Short-lived access tokens and refresh tokens limit the impact of token leakage.",
  },
  {
    q: "How does role-based access control help prevent internal misuse?",
    a: "RBAC ensures that sensitive operations are limited to specific roles, reducing accidental exposure and narrowing the blast radius of compromised accounts.",
  },
  {
    q: "Why combine AI moderation with a reporting system?",
    a: "AI moderation provides scalable first-pass filtering, while reporting handles edge cases and false negatives. This layered approach improves safety without relying on a single control.",
  },
  {
    q: "How does VibeWall handle system failure or breach scenarios?",
    a: "Encryption prevents plaintext exposure, TTL limits data volume, and stateless authentication reduces persistent session risk—together minimizing breach impact.",
  },
  {
    q: "What core design principle guided your architecture?",
    a: "Data minimization. The system intentionally collects less data, stores it encrypted, and deletes it quickly to reduce risk under both normal and failure conditions.",
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
