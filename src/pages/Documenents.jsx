import React, { useState } from "react";
import { Link } from "react-router-dom";

const faqs = [
  {
    q: "What real-world problem does VibeWall solve at a system level?",
    a: "VibeWall reduces the risk of long-term storage of sensitive emotional data. Traditional platforms retain such data indefinitely, increasing exposure during breaches. VibeWall minimizes both identity linkage and data lifetime to reduce damage under failure scenarios.",
  },
  {
    q: "Why is anonymity critical for this platform?",
    a: "Anonymity removes fear of judgment, profiling, and long-term consequences. It enables honest emotional expression without linking content to a persistent identity.",
  },
  {
    q: "Why did you choose MongoDB for this system?",
    a: "MongoDB suits short-lived, semi-structured, write-heavy data. TTL indexes enable automatic deletion, and the document model supports flexible evolution without costly migrations.",
  },
  {
    q: "Why not use a relational database like MySQL or PostgreSQL?",
    a: "Relational databases introduce schema rigidity and require manual cleanup jobs. MongoDB’s native TTL indexes simplify expiration and reduce operational overhead.",
  },
  {
    q: "Why did you choose server-side encryption instead of relying only on HTTPS?",
    a: "HTTPS protects data in transit, not at rest. Server-side encryption ensures stored data remains unreadable even if the database is compromised.",
  },
  {
    q: "Why is encryption applied at the application layer instead of the database layer?",
    a: "Application-layer encryption prevents plaintext from ever reaching the database, protecting against insider access, misconfigured backups, and read-only breaches.",
  },
  {
    q: "What threat model does server-side encryption protect against?",
    a: "It protects against database leaks, unauthorized admin access, backup exposure, and data exfiltration without access to encryption keys.",
  },
  {
    q: "Why are passwords hashed even though users are anonymous?",
    a: "Authentication data is still sensitive. Hashing prevents credential reuse attacks and ensures passwords are never recoverable, even after a breach.",
  },
  {
    q: "Why did you implement automatic deletion instead of user-controlled deletion?",
    a: "User-controlled deletion depends on awareness and behavior. Automatic deletion enforces privacy by default and guarantees data minimization.",
  },
  {
    q: "Why is the expiration window set to 12 hours?",
    a: "Twelve hours balances usability and security. It allows interaction while keeping the exposure window short enough to limit breach impact.",
  },
  {
    q: "How does short data retention improve security?",
    a: "It limits the amount of sensitive data stored at any time, reduces breach impact, and prevents long-term correlation or profiling.",
  },
  {
    q: "Why use Redis caching if the data is sensitive?",
    a: "Redis improves performance during high read traffic. TTL-based eviction ensures cached data never outlives the original database record.",
  },
  {
    q: "Why use JWT-based authentication instead of server-side sessions?",
    a: "JWTs enable stateless authentication, improving scalability and reducing server-side session storage. Short-lived tokens limit damage if compromised.",
  },
  {
    q: "Why did you implement role-based access control (RBAC)?",
    a: "RBAC enforces least-privilege access, ensuring sensitive actions like moderation are restricted and reducing insider risk.",
  },
  {
    q: "How does IAM-style role separation improve platform safety?",
    a: "Role separation limits what each actor can do, reducing accidental misuse and narrowing the blast radius of compromised accounts.",
  },
  {
    q: "Why use AI-powered moderation instead of only manual moderation?",
    a: "AI moderation scales efficiently and provides fast, consistent filtering, reducing reliance on human reviewers for every submission.",
  },
  {
    q: "Why is a reporting system still required with AI moderation?",
    a: "AI systems are probabilistic. Reporting provides a human-in-the-loop mechanism to catch edge cases and false negatives.",
  },
  {
    q: "How do you prevent feedback from becoming abusive?",
    a: "Feedback flows through the same moderation and reporting pipeline as confessions, ensuring consistent enforcement.",
  },
  {
    q: "How does VibeWall handle system failure or breach scenarios?",
    a: "Encryption prevents plaintext exposure, TTL limits stored data volume, RBAC restricts misuse, and stateless auth reduces session risk.",
  },
  {
    q: "What core design principle guided the architecture?",
    a: "Data minimization. The system intentionally collects less data, stores it securely, and deletes it quickly to reduce risk under failure conditions.",
  },
];


function Documents() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = faqs[activeIndex];

  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
      {/* Header */}
      <header className="mb-8 space-y-3">
        <p className="text-sm text-amber-300/80">~/vibewall $ docs --system-design</p>
        <h1 className="text-4xl font-extrabold text-emerald-300 terminal-prompt">
          &gt; Docs_<span className="cursor-blink">█</span>
        </h1>
       
        <Link
          to="/"
          className="inline-block text-emerald-300 hover:text-emerald-200 text-sm"
        >
          ← Back to landing
        </Link>
      </header>

      {/* Layout */}
      <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-6">
        {/* Sidebar */}
        <aside className="border border-emerald-500/20 bg-black/60 rounded-xl p-4 h-[70vh] overflow-y-auto">
          <p className="text-xs tracking-widest text-amber-300/70 uppercase mb-3">
            Questions
          </p>
          <ul className="space-y-2">
            {faqs.map((item, idx) => (
              <li key={idx}>
                <button
                  onClick={() => setActiveIndex(idx)}
                  className={`w-full text-left text-sm rounded-md px-3 py-2 transition
                    ${
                      idx === activeIndex
                        ? "bg-emerald-500/10 text-emerald-200 border border-emerald-400/40"
                        : "text-gray-300/80 hover:bg-emerald-500/5"
                    }`}
                >
                  {item.q}
                </button>
              </li>
            ))}
          </ul>
        </aside>

        {/* Content */}
        <section className="border border-emerald-500/20 bg-black/60 rounded-xl p-6 space-y-4">
          <h2 className="text-2xl font-semibold text-emerald-200">
            {active.q}
          </h2>

          <div className="h-px bg-gradient-to-r from-emerald-400/30 to-transparent" />

          <p className="text-gray-300/80 leading-relaxed text-base">
            {active.a}
          </p>

          
        </section>
      </div>
    </main>
  );
}

export default Documents;
