import React from 'react'

function Stack({stack,SectionHeading}) {
  return (
    <section id="stack" className="space-y-8">
          <SectionHeading
            label="STACK --verbose"
            title="Runtime + services"
            description="Tooling that powers VibeWall behind the scenes."
          />

          <div className="rounded-2xl border border-emerald-500/40 bg-[#090c09]/80 p-5 shadow-[0_0_18px_rgba(16,185,129,0.18)]">
            <div className="space-y-2 text-emerald-100">
              {stack.map((item, index) => (
                <p key={index} className="flex items-center gap-2">
                  <span className="text-amber-300">&gt;</span>
                  <span>{item}</span>
                </p>
              ))}
            </div>
          </div>
    </section>
  )
}

export default Stack
