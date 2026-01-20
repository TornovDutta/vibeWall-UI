import React from 'react'

function footer() {
  return (
    <footer className="border-t border-gray-800/60 bg-black/80 py-8">
      <div className="container-page flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-slate-400">
        <p>VibeWall — secure, anonymous, temporary.</p>
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/TornovDutta/VibeWall"
            target="_blank"
            rel="noreferrer"
            className="text-slate-300 hover:text-slate-50"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  )
}

export default footer
