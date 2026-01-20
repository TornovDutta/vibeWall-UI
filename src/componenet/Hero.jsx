import React from 'react'

function Hero() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center gap-8">
          <div className="space-y-4">
            <p className="text-sm text-amber-300/80">~/vibewall $ launch --secure --anon</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-emerald-300 leading-tight terminal-prompt">
              &gt; VibeWall_$<span className="cursor-blink">█</span>
            </h1>
            <p className="text-xl text-emerald-100/90">Anonymous &amp; Secure Emotion Sharing Platform</p>
            <p className="text-gray-300/80 leading-relaxed">
              VibeWall lets students share emotions without fear. Anonymous posting, encrypted storage, AI moderation,
              and time-boxed retention keep every confession private, safe, and temporary.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="https://github.com/TornovDutta/VibeWall"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-emerald-400/60 bg-emerald-500/10 text-emerald-200 font-semibold shadow-[0_0_20px_rgba(16,185,129,0.25)] hover:shadow-[0_0_28px_rgba(16,185,129,0.45)] hover:-translate-y-0.5 transition-transform transition-shadow duration-200"
            >
              git clone vibewall
            </a>
            <p className="text-sm text-gray-500/80"># secure. anonymous. ephemeral.</p>
          </div>
        </section>
  )
}

export default Hero
