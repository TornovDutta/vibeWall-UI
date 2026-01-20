import React from 'react'

function Stack({stack,SectionHeading}) {
  return (
    <section id="stack" className="space-y-8">
          <SectionHeading
            label="STACK --verbose"
            title="Runtime + services"
            description="Tooling that powers VibeWall behind the scenes."
          />

          <div className="card p-5">
            <div className="space-y-2 text-slate-100">
              {stack.map((item, index) => (
                <p key={index} className="flex items-center gap-2">
                  <span className="text-indigo-300">•</span>
                  <span>{item}</span>
                </p>
              ))}
            </div>
          </div>
    </section>
  )
}

export default Stack
