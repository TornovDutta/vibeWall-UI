import './App.css';

const problems = [
  { level: 'ERROR', text: 'Students fear judgment when sharing emotions' },
  { level: 'WARNING', text: 'Emotional data stored longer than necessary' },
  { level: 'CRITICAL', text: 'Toxic content without moderation' },
  { level: 'INFO', text: 'Weak authentication exposes accounts' },
];

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
];

const stack = [
  'Java 17',
  'Spring Boot',
  'MongoDB',
  'Redis',
  'JWT (Access + Refresh)',
  'OpenAI API',
  'Maven',
  'Swagger UI',
];

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
];

function SectionHeading({ label, title, description }) {
  return (
    <div className="space-y-2 text-center">
      {label && <p className="text-xs tracking-[0.25em] text-amber-300/70 uppercase">{label}</p>}
      <h2 className="text-3xl sm:text-4xl font-bold text-emerald-300">{title}</h2>
      {description && <p className="text-gray-300/80 max-w-3xl mx-auto leading-relaxed">{description}</p>}
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-black text-emerald-100 relative overflow-hidden font-mono">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.08),_transparent_35%)]" />
      <div className="pointer-events-none noise-layer" />
      <div className="pointer-events-none scanline" />

      <main className="relative max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-14 space-y-24">
        {/* Hero */}
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

        {/* Problems */}
        <section id="problem" className="space-y-10">
          <SectionHeading
            label="SYSTEM_ISSUES.log"
            title="Detected vulnerabilities in student expression"
            description="Realtime feed of the blockers that VibeWall neutralizes."
          />
          <div className="grid sm:grid-cols-2 gap-4">
            {problems.map((item) => (
              <div
                key={item.text}
                className="rounded-xl border border-emerald-500/40 bg-[#0a0f0a]/80 p-4 shadow-[0_0_16px_rgba(16,185,129,0.18)]"
              >
                <p className="text-amber-200/90 text-xs mb-2">[{item.level}]</p>
                <p className="text-emerald-100">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Features */}
        <section id="features" className="space-y-10">
          <SectionHeading
            label="FEATURES_ENABLED"
            title="Operational capabilities online"
            description="Everything toggled to ON for safety, privacy, and resilience."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature}
                className="h-full rounded-xl border border-emerald-500/50 bg-[#0b0f0b]/80 p-5 shadow-[0_0_18px_rgba(16,185,129,0.22)] hover:shadow-[0_0_26px_rgba(16,185,129,0.35)] transition-shadow duration-200"
              >
                <div className="flex items-center justify-between mb-3 text-xs text-emerald-200/90">
                  <span>&#10003; ENABLED</span>
                  <span className="text-amber-200/90">ONLINE</span>
                </div>
                <p className="text-lg text-emerald-100">{feature}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Security */}
        <section className="space-y-8">
          <SectionHeading
            label="SECURITY_LAYER.java"
            title="Authentication & security blueprint"
            description="Java-flavored, stateless security flow with JWT access + refresh tokens."
          />
          <div className="rounded-2xl border border-emerald-500/40 bg-[#0a0d0a]/80 p-5 shadow-[0_0_20px_rgba(16,185,129,0.2)] code-block">
            <pre className="text-sm text-emerald-100 whitespace-pre-wrap leading-relaxed">
{securitySnippets.map((line) => `\u200b${line}`).join('\n')}
            </pre>
          </div>
        </section>

        {/* Stack */}
        <section id="stack" className="space-y-8">
          <SectionHeading
            label="STACK --verbose"
            title="Runtime + services"
            description="Tooling that powers VibeWall behind the scenes."
          />
          <div className="rounded-2xl border border-emerald-500/40 bg-[#090c09]/80 p-5 shadow-[0_0_18px_rgba(16,185,129,0.18)]">
            <div className="space-y-2 text-emerald-100">
              {stack.map((item) => (
                <p key={item} className="flex items-center gap-2">
                  <span className="text-amber-300">&gt;</span>
                  <span>{item}</span>
                </p>
              ))}
            </div>
          </div>
        </section>
      </main>

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
    </div>
  );
}

export default App;
