import React from 'react'

function footer() {
  return (
    <footer className="border-t border-emerald-500/30 bg-black/90 py-6">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-emerald-200/80">
              <p>VibeWall | Secure • Anonymous • Temporary</p>
              <div className="flex items-center gap-2">
                <span className="h-px w-8 bg-emerald-400/70" />
                <span className="cursor-blink text-amber-300">_</span>
                <a
                  href="https://github.com/TornovDutta/VibeWall"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-emerald-100 transition-colors"
                >
                  GitHub
                </a>
              </div>
            </div>
    </footer>
  )
}

export default footer
