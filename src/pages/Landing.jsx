import React from 'react'
import Hero from '../componenet/Hero'
import Problem from '../componenet/Problem'
import Features from '../componenet/Features'
import Security from '../componenet/Security'
import Stack from '../componenet/Stack'
import { Link } from 'react-router-dom'



const problems = [
  { level: 'ERROR', text: 'Students fear judgment when sharing emotions' },
  { level: 'WARNING', text: 'Emotional data stored longer than necessary' },
  { level: 'CRITICAL', text: 'Toxic content without moderation' },
  { level: 'INFO', text: 'Weak authentication exposes accounts' },
]

const features = [
  'Anonymous Confessions',
  'Server-Side Encryption',
  'Secure Password Hashing',
  'JWT-Based Authentication',
  'Role-Based Access Control (RBAC)',
  'Refresh Token Mechanism',
  'AI-Powered Moderation',
  'Automatic Confession Deletion (12h TTL)',
  'Redis-Based Caching',
  'Report System',
  'Admin Management',
  'Feedback System',
]

const stack = [
  'Java ',
  'Spring Boot',
  'MongoDB',
  'Redis',
  'JWT (Access + Refresh)',
  'OpenAI API',
  'Maven',
  'Swagger UI',
]

const securitySnippets = [
  '// SECURITY_LAYER.java',
  '@Stateless public class Auth {',
  '  // JWT Access + Refresh Tokens',
  '  Token issue(User user) {',
  '    return sign(user, expiry = 15m);',
  '  }',
  '',
  '  // Role-based authorization (USER / ADMIN)',
  '  boolean authorize(User user, Route route) {',
  '    return route.roles.contains(user.role);',
  '  }',
  '',
  '  // Stateless backend security',
  '  boolean validate(Token token) {',
  '    return verifySignature(token) && !token.expired();',
  '  }',
  '',
  '  // Token expiration and renewal',
  '  Token refresh(Token refreshToken) {',
  '    return refreshToken.valid() ? issue(refreshToken.user()) : null;',
  '  }',
  '}',
]


function SectionHeading({ label, title, description }) {
  return (
    <div className="space-y-2 text-center">
      {label && (
        <p className="text-xs tracking-[0.25em] text-amber-300/70 uppercase">
          {label}
        </p>
      )}
      <h2 className="text-3xl sm:text-4xl font-bold text-emerald-300">
        {title}
      </h2>
      {description && (
        <p className="mx-auto max-w-3xl text-gray-300/80 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  )
}



function Landing() {
  return (
    <main className="relative mx-auto max-w-6xl space-y-24 px-4 py-10 sm:px-6 sm:py-14">
        {/* Hero */}
        <Hero />

        {/* Problems */}
        <Problem
          problems={problems}
          SectionHeading={SectionHeading}
        />

        {/* Features */}
        <Features
          features={features}
          SectionHeading={SectionHeading}
        />

        {/* Security */}
        <Security
          securitySnippets={securitySnippets}
          SectionHeading={SectionHeading}
        />

        {/* Stack */}
        <Stack
          stack={stack}
          SectionHeading={SectionHeading}
        />

        {/* Docs */}
        <section className="relative overflow-hidden rounded-2xl border border-emerald-500/25 bg-black/60 p-6 sm:p-10">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.12),_transparent_45%)]" />
          <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="space-y-3">
              <p className="text-xs tracking-[0.25em] text-amber-300/70 uppercase">Documentation</p>
              <h3 className="text-2xl sm:text-3xl font-bold text-emerald-200">
                <span className="glitch" data-text="Privacy & Security FAQ">Privacy &amp; Security FAQ</span>
              </h3>
              <p className="max-w-2xl text-gray-300/80 leading-relaxed">
                Understand how VibeWall protects confessions: encryption, retention window (12h TTL), and safeguards that
                keep data private even from admins and developers.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                to="/docs"
                className="inline-flex items-center gap-2 rounded-lg border border-emerald-400/60 bg-emerald-500/10 px-5 py-3 font-semibold text-emerald-200 shadow-[0_0_22px_rgba(16,185,129,0.25)] hover:shadow-[0_0_30px_rgba(16,185,129,0.45)] hover:-translate-y-0.5 transition-transform transition-shadow duration-200"
              >
                Read docs <span className="text-amber-300/80">→</span>
              </Link>
              <span className="text-sm text-gray-500/80">/docs</span>
            </div>
          </div>
        </section>

      </main>
  )
}

export default Landing
