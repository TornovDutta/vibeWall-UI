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
                className="card p-4"
              >
                <p className="text-slate-400 text-xs mb-2">[{item.level}]</p>
                <p className="text-slate-100">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

  )
}

export default Problem
