import React from 'react'
import Hero from '../componenet/Hero'
import Problem from '../componenet/Problem'
import Features from '../componenet/Features'
import Security from '../componenet/Security'
import Stack from '../componenet/Stack'



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

      </main>
  )
}

export default Landing
