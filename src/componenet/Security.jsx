import React from 'react'

function Security({ SectionHeading, securitySnippets }) {
  return (
    <section className="space-y-8">
      <SectionHeading
        label="SECURITY_LAYER.java"
        title="Authentication & security blueprint"
        description="Java-flavored, stateless security flow with JWT access + refresh tokens."
      />

      <div className="rounded-2xl border border-emerald-500/40 bg-[#0a0d0a]/80 p-5 shadow-[0_0_20px_rgba(16,185,129,0.2)] code-block">
        <pre className="whitespace-pre-wrap text-sm leading-relaxed text-emerald-100">
          {securitySnippets
            .map((line, index) => `\u200b${line}`)
            .join('\n')}
        </pre>
      </div>
    </section>
  )
}

export default Security
