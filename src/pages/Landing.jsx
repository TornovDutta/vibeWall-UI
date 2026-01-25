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
        <p className="kicker">
          {label}
        </p>
      )}
      <h2 className="text-3xl sm:text-4xl font-bold text-slate-50">
        {title}
      </h2>
      {description && (
        <p className="mx-auto max-w-3xl text-slate-300 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  )
}



function Landing() {
  return (
    <main className="relative container-page space-y-24 py-10 sm:py-14">
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
      <section className="relative overflow-hidden card p-6 sm:p-10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.20),_transparent_55%)]" />
        <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="space-y-3">
            <p className="kicker">Documentation</p>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-50">
              Privacy &amp; Security FAQ
            </h3>
            <p className="max-w-2xl text-slate-300 leading-relaxed">
              Understand how VibeWall protects confessions: encryption, retention window (12h TTL), and safeguards that
              keep data private even from admins and developers.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              to="/docs"
              className="btn-primary px-5 py-3"
            >
              Read docs <span className="text-white/80">→</span>
            </Link>
            <span className="text-sm text-slate-400">/docs</span>
          </div>
        </div>
      </section>

      {/* API */}
      <section className="py-10 border-t border-gray-800/60 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="space-y-3">
            <h3 className="text-2xl font-bold text-slate-100">
              Developers
            </h3>
            <p className="text-slate-400 leading-relaxed">
              You can integrate VibeWall into your applications using our API.
            </p>
          </div>

          <div>
            <Link
              to="/api"
              className="btn-secondary px-6 py-3"
            >
              View API Docs
            </Link>
          </div>
        </div>
      </section>

    </main>
  )
}

export default Landing
