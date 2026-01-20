import React from 'react'

function SubFeatures({ feature }) {
  return (
    <div className="h-full card p-5">
      <div className="mb-3 flex items-center justify-between text-xs text-slate-400">
        <span className="inline-flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          ENABLED
        </span>
        <span className="text-slate-300">ONLINE</span>
      </div>

      <p className="text-lg font-semibold text-slate-100">
        {feature}
      </p>
    </div>
  )
}

export default SubFeatures
