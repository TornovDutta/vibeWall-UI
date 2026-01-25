import React, { useState } from "react";
import { Link } from "react-router-dom";

const apiEndpoints = [
  {
    method: "POST",
    path: "/api/auth/register",
    description: "Register a new user account",
    auth: "None",
    body: {
      username: "string",
      email: "string",
      password: "string"
    }
  },
  {
    method: "POST",
    path: "/api/auth/login",
    description: "Authenticate and receive access tokens",
    auth: "None",
    body: {
      email: "string",
      password: "string"
    }
  },
  {
    method: "POST",
    path: "/api/auth/refresh",
    description: "Refresh access token using refresh token",
    auth: "Refresh Token",
    body: {
      refreshToken: "string"
    }
  },
  {
    method: "GET",
    path: "/api/confessions",
    description: "Get all confessions (paginated)",
    auth: "Access Token",
    query: {
      page: "number (default: 0)",
      size: "number (default: 10)"
    }
  },
  {
    method: "POST",
    path: "/api/confessions",
    description: "Create a new anonymous confession",
    auth: "Access Token",
    body: {
      content: "string",
      emotion: "string (optional)"
    }
  },
  {
    method: "DELETE",
    path: "/api/confessions/{id}",
    description: "Delete a confession by ID",
    auth: "Access Token (Owner or Admin)",
    params: {
      id: "string"
    }
  }
];

const apiKeyInfo = {
  title: "API Key Authentication",
  description: "VibeWall uses JWT-based authentication. You'll need to obtain an access token through the login endpoint to access protected routes.",
  steps: [
    "Register a new account using POST /api/auth/register",
    "Login with your credentials using POST /api/auth/login",
    "You'll receive an access token (valid for 15 minutes) and a refresh token",
    "Include the access token in the Authorization header: Bearer <access_token>",
    "When the access token expires, use POST /api/auth/refresh with your refresh token to get a new access token"
  ],
  baseUrl: "https://api.vibewall.com",
  example: {
    request: `curl -X POST https://api.vibewall.com/api/auth/login \\
  -H "Content-Type: application/json" \\
  -d '{
    "email": "user@example.com",
    "password": "yourpassword"
  }'`,
    response: `{
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "tokenType": "Bearer",
  "expiresIn": 900
}`
  }
};

function Api() {
  const [selectedEndpoint, setSelectedEndpoint] = useState(0);
  const endpoint = apiEndpoints[selectedEndpoint];

  return (
    <main className="container-page py-10 sm:py-14">
      {/* Header */}
      <header className="mb-10 space-y-4">
        <p className="kicker">API Documentation</p>
        <h1 className="text-4xl font-extrabold text-slate-50">
          API Key &amp; Authentication Guide
        </h1>
        <p className="text-slate-300 leading-relaxed max-w-3xl">
          Learn how to authenticate and use the VibeWall API to interact with confessions, manage your account, and integrate with your applications.
        </p>
        <Link
          to="/"
          className="inline-block text-slate-300 hover:text-slate-50 text-sm transition-colors"
        >
          ← Back to landing
        </Link>
      </header>

      {/* API Key Information Section */}
      <section className="card p-6 sm:p-10 mb-8 space-y-6">
        <div className="space-y-3">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-50">
            {apiKeyInfo.title}
          </h2>
          <p className="text-slate-300 leading-relaxed">
            {apiKeyInfo.description}
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-slate-50">Base URL</h3>
          <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-4">
            <code className="text-indigo-400 font-mono text-sm">
              {apiKeyInfo.baseUrl}
            </code>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-slate-50">Getting Started</h3>
          <ol className="list-decimal list-inside space-y-2 text-slate-300">
            {apiKeyInfo.steps.map((step, idx) => (
              <li key={idx} className="leading-relaxed">
                {step}
              </li>
            ))}
          </ol>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-slate-50">Example Request</h3>
          <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-4 overflow-x-auto">
            <pre className="text-slate-300 font-mono text-sm whitespace-pre-wrap">
              {apiKeyInfo.example.request}
            </pre>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-slate-50">Example Response</h3>
          <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-4 overflow-x-auto">
            <pre className="text-slate-300 font-mono text-sm whitespace-pre-wrap">
              {apiKeyInfo.example.response}
            </pre>
          </div>
        </div>
      </section>

      {/* API Endpoints Section */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold text-slate-50">API Endpoints</h2>
          <p className="text-slate-300 leading-relaxed">
            Explore available endpoints and their requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[320px_1fr] gap-6">
          {/* Sidebar */}
          <aside className="card p-4 h-[70vh] overflow-y-auto">
            <p className="kicker mb-4">Endpoints</p>
            <ul className="space-y-1">
              {apiEndpoints.map((item, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => setSelectedEndpoint(idx)}
                    className={`w-full text-left text-sm rounded-lg px-3 py-2 transition
                      ${
                        idx === selectedEndpoint
                          ? "bg-indigo-500/20 text-slate-50 border border-indigo-500/40"
                          : "text-slate-300 hover:bg-gray-800/50"
                      }`}
                  >
                    <span className={`font-mono font-semibold ${
                      item.method === "GET" ? "text-green-400" :
                      item.method === "POST" ? "text-blue-400" :
                      item.method === "DELETE" ? "text-red-400" :
                      "text-yellow-400"
                    }`}>
                      {item.method}
                    </span>{" "}
                    <span className="text-xs">{item.path}</span>
                  </button>
                </li>
              ))}
            </ul>
          </aside>

          {/* Content */}
          <section className="card p-6 space-y-4">
            <div className="flex items-center gap-3">
              <span className={`px-3 py-1 rounded font-mono font-semibold text-sm ${
                endpoint.method === "GET" ? "bg-green-500/20 text-green-400 border border-green-500/40" :
                endpoint.method === "POST" ? "bg-blue-500/20 text-blue-400 border border-blue-500/40" :
                endpoint.method === "DELETE" ? "bg-red-500/20 text-red-400 border border-red-500/40" :
                "bg-yellow-500/20 text-yellow-400 border border-yellow-500/40"
              }`}>
                {endpoint.method}
              </span>
              <code className="text-indigo-400 font-mono text-lg">
                {endpoint.path}
              </code>
            </div>

            <div className="h-px bg-gradient-to-r from-indigo-500/40 to-transparent" />

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-slate-50 mb-2">Description</h3>
                <p className="text-slate-300 leading-relaxed">
                  {endpoint.description}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-50 mb-2">Authentication</h3>
                <p className="text-slate-300">
                  <span className={`px-2 py-1 rounded text-sm ${
                    endpoint.auth === "None" 
                      ? "bg-gray-700 text-gray-300" 
                      : "bg-indigo-500/20 text-indigo-400 border border-indigo-500/40"
                  }`}>
                    {endpoint.auth}
                  </span>
                </p>
              </div>

              {endpoint.body && (
                <div>
                  <h3 className="text-lg font-semibold text-slate-50 mb-2">Request Body</h3>
                  <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-4">
                    <pre className="text-slate-300 font-mono text-sm">
                      {JSON.stringify(endpoint.body, null, 2)}
                    </pre>
                  </div>
                </div>
              )}

              {endpoint.query && (
                <div>
                  <h3 className="text-lg font-semibold text-slate-50 mb-2">Query Parameters</h3>
                  <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-4">
                    <pre className="text-slate-300 font-mono text-sm">
                      {JSON.stringify(endpoint.query, null, 2)}
                    </pre>
                  </div>
                </div>
              )}

              {endpoint.params && (
                <div>
                  <h3 className="text-lg font-semibold text-slate-50 mb-2">Path Parameters</h3>
                  <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-4">
                    <pre className="text-slate-300 font-mono text-sm">
                      {JSON.stringify(endpoint.params, null, 2)}
                    </pre>
                  </div>
                </div>
              )}
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}

export default Api;
