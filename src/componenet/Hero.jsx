import React from 'react'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <section className="min-h-[78vh] flex flex-col justify-center gap-8">
          <div className="space-y-4">
            <p className="kicker">Secure • Anonymous • Ephemeral</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-50 leading-tight">
              VibeWall
            </h1>
            <p className="text-xl text-slate-200">Anonymous &amp; secure emotion sharing platform.</p>
            <p className="text-slate-300 leading-relaxed">
              VibeWall lets students share emotions without fear. Anonymous posting, encrypted storage, AI moderation,
              and time-boxed retention keep every confession private, safe, and temporary.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="https://github.com/TornovDutta/VibeWall"
              target="_blank"
              rel="noreferrer"
              className="btn-primary px-5 py-3"
            >
              View on GitHub
            </a>
            <Link
              to="/setup"
              className="btn-primary px-5 py-3 bg-green-600 hover:bg-green-700 transition-colors"
            >
              Get Started
            </Link>
            <p className="text-sm text-slate-400">Built with privacy-first defaults.</p>
          </div>
        </section>
  )
}

export default Hero
