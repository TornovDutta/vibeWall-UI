import React from 'react'

function SubFeatures({ feature }) {
  return (
    <div className="h-full rounded-xl border border-emerald-500/50 bg-[#0b0f0b]/80 p-5 shadow-[0_0_18px_rgba(16,185,129,0.22)] hover:shadow-[0_0_26px_rgba(16,185,129,0.35)] transition-shadow duration-200">
      <div className="mb-3 flex items-center justify-between text-xs text-emerald-200/90">
        <span>✓ ENABLED</span>
        <span className="text-amber-200/90">ONLINE</span>
      </div>

      <p className="text-lg text-emerald-100">
        {feature}
      </p>
    </div>
  )
}

export default SubFeatures
