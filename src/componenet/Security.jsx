import React from 'react'

function Security({ SectionHeading, securitySnippets }) {
  return (
    <section className="space-y-8">
      <SectionHeading
        label="SECURITY_LAYER.java"
        title="Authentication & security blueprint"
        description="Java-flavored, stateless security flow with JWT access + refresh tokens."
      />

      <div className="card p-5">
        <pre className="whitespace-pre-wrap text-sm leading-relaxed text-slate-100 font-mono">
          {securitySnippets
            .map((line, index) => `\u200b${line}`)
            .join('\n')}
        </pre>
      </div>
    </section>
  )
}

export default Security
