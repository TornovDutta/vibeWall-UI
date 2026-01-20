import React from 'react'

function Problem({problems,SectionHeading}) {
  return (
    <section id="problem" className="space-y-10">
          <SectionHeading
            label="SYSTEM_ISSUES.log"
            title="Detected vulnerabilities in student expression"
            description="Realtime feed of the blockers that VibeWall neutralizes."
          />
          <div className="grid sm:grid-cols-2 gap-4">
            {problems.map((item) => (
              <div
                key={item.text}
                className="rounded-xl border border-emerald-500/40 bg-[#0a0f0a]/80 p-4 shadow-[0_0_16px_rgba(16,185,129,0.18)]"
              >
                <p className="text-amber-200/90 text-xs mb-2">[{item.level}]</p>
                <p className="text-emerald-100">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

  )
}

export default Problem
