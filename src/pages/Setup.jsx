import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const setupSteps = [
  {
    title: 'Prerequisites',
    description: 'Make sure you have the following installed on your system.',
    items: [
      'Java JDK 11 or higher',
      'Maven 3.6 or higher',
      'Docker &amp; Docker Compose',
      'Git'
    ]
  },
  {
    title: 'Clone the Repository',
    description: 'Get the VibeWall Spring Boot project from GitHub.',
    code: 'git clone https://github.com/TornovDutta/VibeWall.git\ncd VibeWall'
  },
  {
    title: 'Clean and Package the Project',
    description: 'Run Maven to compile and package the project without running tests.',
    code: 'mvn clean package -DskipTests'
  },
  {
    title: 'Configure Environment Variables',
    description: 'Create a .env file in the project root with your API keys and configuration.',
    code: '# OpenAI Configuration\nOPENAI_API_KEY=your_openai_api_key_here\n\n# Database Configuration\nDB_USERNAME=vibewall\nDB_PASSWORD=your_secure_password\nDB_NAME=vibewall_db\n\n# Server Configuration\nSERVER_PORT=8080'
  },
  {
    title: 'Build and Run with Docker',
    description: 'Start all services using Docker Compose. This will build and run the application with all dependencies.',
    code: 'docker compose up --build'
  },
  {
    title: 'Verify Installation',
    description: 'Check that all services are running correctly and the application is accessible.',
    code: '# Check application health\ncurl http://localhost:8080/health\n\n# Check Docker containers\ndocker compose ps'
  }
]

function Setup() {
  const [activeStep, setActiveStep] = useState(0)
  const activeContent = setupSteps[activeStep]

  return (
    <main className="container-page py-10 sm:py-14">
      {/* Header */}
      <header className="mb-10 space-y-4">
        <p className="kicker">Setup &amp; Installation</p>
        <h1 className="text-4xl font-extrabold text-slate-50">
          Project Setup Guide
        </h1>
        
        <Link
          to="/"
          className="inline-block text-slate-300 hover:text-slate-50 text-sm transition-colors"
        >
          ← Back to landing
        </Link>
      </header>

      {/* Layout */}
      <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-6">
        {/* Sidebar - Steps Navigation */}
        <aside className="card p-4 h-fit">
          <p className="kicker mb-4">Steps</p>
          <ul className="space-y-1">
            {setupSteps.map((step, idx) => (
              <li key={idx}>
                <button
                  onClick={() => setActiveStep(idx)}
                  className={`w-full text-left text-sm rounded-lg px-3 py-2 transition flex items-start gap-2
                    ${
                      idx === activeStep
                        ? "bg-indigo-500/20 text-slate-50 border border-indigo-500/40"
                        : "text-slate-300 hover:bg-gray-800/50"
                    }`}
                >
                  <span className="flex-shrink-0 w-5 h-5 rounded-full border border-current flex items-center justify-center text-xs font-semibold">
                    {idx + 1}
                  </span>
                  <span>{step.title}</span>
                </button>
              </li>
            ))}
          </ul>
        </aside>

        {/* Content Area */}
        <section className="card p-6 space-y-6">
          {/* Step Title and Description */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-indigo-500/20 border border-indigo-500/40 flex items-center justify-center text-indigo-400 font-semibold">
                {activeStep + 1}
              </div>
              <h2 className="text-2xl font-semibold text-slate-50">
                {activeContent.title}
              </h2>
            </div>
            <div className="h-px bg-gradient-to-r from-indigo-500/40 to-transparent" />
            <p className="text-slate-300 leading-relaxed">
              {activeContent.description}
            </p>
          </div>

          {/* Content */}
          <div className="space-y-4">
            {activeContent.items ? (
              // Prerequisites - List format
              <ul className="space-y-2">
                {activeContent.items.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-slate-200">
                    <span className="flex-shrink-0 w-2 h-2 rounded-full bg-indigo-400" />
                    {item}
                  </li>
                ))}
              </ul>
            ) : (
              // Code Block
              <>
                <div className="text-sm text-slate-400 mb-2">Command:</div>
                <div className="bg-gray-950/50 rounded-lg border border-gray-800/60 p-4 overflow-x-auto">
                  <pre className="font-mono text-sm text-slate-300">
                    <code>{activeContent.code}</code>
                  </pre>
                </div>
              </>
            )}
          </div>

          {/* Special notes for specific steps */}
          {activeStep === 3 && (
            <div className="bg-indigo-500/10 border border-indigo-500/20 rounded-lg p-4">
              <p className="text-sm text-indigo-200">
                <strong>📝 Important:</strong> Get your OpenAI API key from{' '}
                <a 
                  href="https://platform.openai.com/api-keys" 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-indigo-300 hover:text-indigo-100 underline"
                >
                  platform.openai.com/api-keys
                </a>
              </p>
            </div>
          )}

          {activeStep === 4 && (
            <div className="bg-indigo-500/10 border border-indigo-500/20 rounded-lg p-4 space-y-2">
              <p className="text-sm text-indigo-200 font-semibold">This command will:</p>
              <ul className="space-y-1 text-sm text-indigo-200 ml-4">
                <li>• Build the Docker image for the Spring Boot application</li>
                <li>• Start the database container</li>
                <li>• Start the application server</li>
                <li>• Set up all required networks and volumes</li>
              </ul>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex gap-4 pt-4 border-t border-gray-800/60">
            <button
              onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
              disabled={activeStep === 0}
              className="px-4 py-2 rounded-lg border border-gray-700/60 text-slate-300 hover:bg-gray-900/50 disabled:opacity-50 disabled:cursor-not-allowed transition"
            >
              ← Previous
            </button>
            <button
              onClick={() => setActiveStep(Math.min(setupSteps.length - 1, activeStep + 1))}
              disabled={activeStep === setupSteps.length - 1}
              className="px-4 py-2 rounded-lg border border-indigo-500/40 bg-indigo-500/10 text-indigo-300 hover:bg-indigo-500/20 disabled:opacity-50 disabled:cursor-not-allowed transition"
            >
              Next →
            </button>
          </div>
        </section>
      </div>

      {/* Troubleshooting Section */}
      <section className="card p-6 mt-8 space-y-4">
        <h3 className="text-lg font-semibold text-slate-50">Troubleshooting</h3>
        <div className="h-px bg-gradient-to-r from-indigo-500/40 to-transparent" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <p className="font-semibold text-slate-200">Port already in use</p>
            <p className="text-sm text-slate-400">Change the port in your .env file and docker-compose.yml</p>
          </div>
          <div className="space-y-2">
            <p className="font-semibold text-slate-200">Docker permission denied</p>
            <p className="text-sm text-slate-400">Run Docker commands with sudo or add your user to the docker group</p>
          </div>
          <div className="space-y-2">
            <p className="font-semibold text-slate-200">Build fails</p>
            <p className="text-sm text-slate-400">Ensure you have Maven installed correctly and Java version is compatible</p>
          </div>
          <div className="space-y-2">
            <p className="font-semibold text-slate-200">API key errors</p>
            <p className="text-sm text-slate-400">Double-check your OpenAI API key is valid and not expired</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <div className="mt-10 pt-8 text-center space-y-4 border-t border-gray-800/60">
        <p className="text-slate-400">Need more help?</p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="https://github.com/TornovDutta/VibeWall"
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary"
          >
            View on GitHub
          </a>
          <Link
            to="/"
            className="btn btn-ghost"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  )
}

export default Setup
