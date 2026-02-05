import React, { useState } from "react";
import { Link } from "react-router-dom";

const apiEndpoints = [
  // ================= AUTH (PUBLIC) =================
  {
    group: "Authentication",
    method: "POST",
    path: "/auth/register",
    description: "Register a new user",
    auth: "Public (No JWT required)",
    body: {
      name: "string",
      password: "string"
    }
  },
  {
    group: "Authentication",
    method: "POST",
    path: "/auth/login",
    description: "Login and receive a JWT token",
    auth: "Public (No JWT required)",
    body: {
      name: "string",
      password: "string"
    }
  },
  {
    group: "Authentication",
    method: "POST",
    path: "/auth/refresh",
    description: "Refresh JWT token",
    auth: "Public (Refresh Token)",
    body: {
      refreshToken: "string"
    }
  },
  {
    group: "Authentication",
    method: "POST",
    path: "/auth/logout",
    description: "Logout the current user",
    auth: "JWT (User / Admin)"
  },

  // ================= FEED (PUBLIC) =================
  {
    group: "Feed",
    method: "GET",
    path: "/feed",
    description: "Get the feed of confessions",
    auth: "Public (No JWT required)"
  },

  // ================= USERS / CONFESSIONS (USER JWT) =================
  {
    group: "Confessions",
    method: "POST",
    path: "/users/confession",
    description: "Create a new confession",
    auth: "JWT (User Access Token)",
    body: {
      content: "string"
    }
  },
  {
    group: "Confessions",
    method: "PUT",
    path: "/users/confession/{id}",
    description: "Update an existing confession",
    auth: "JWT (User Access Token)",
    params: {
      id: "string"
    },
    body: {
      content: "string"
    }
  },
  {
    group: "Confessions",
    method: "DELETE",
    path: "/users/confession/{id}",
    description: "Delete a confession",
    auth: "JWT (User Access Token)",
    params: {
      id: "string"
    }
  },

  // ================= USERS =================
  {
    group: "Users",
    method: "PUT",
    path: "/users/me",
    description: "Update current user's profile",
    auth: "JWT (User Access Token)",
    
  },
  {
    group: "Users",
    method: "DELETE",
    path: "/users/me",
    description: "Delete current user's account",
    auth: "JWT (User Access Token)"
  },

  // ================= REPORTS =================
  {
    group: "Reports",
    method: "POST",
    path: "/users/report",
    description: "Create a report",
    auth: "JWT (User Access Token)",
    body: {
      confessionId: "string",
      reason: "string"
    }
  },
  {
    group: "Reports",
    method: "PUT",
    path: "/users/report/{reportId}",
    description: "Update a report",
    auth: "JWT (User Access Token)",
    params: {
      reportId: "string"
    }
  },
  {
    group: "Reports",
    method: "DELETE",
    path: "/users/report/{reportId}",
    description: "Delete a report",
    auth: "JWT (User Access Token)",
    params: {
      reportId: "string"
    }
  },

  // ================= FEEDBACK =================
  {
    group: "Feedback",
    method: "POST",
    path: "/users/feedback/{confessionId}",
    description: "Give feedback on a confession",
    auth: "JWT (User Access Token)",
    params: {
      confessionId: "string"
    },
    body: {
      content: "string"
    }
  },
  {
    group: "Feedback",
    method: "PUT",
    path: "/users/feedback/{confessionId}/{feedbackId}",
    description: "Update feedback",
    auth: "JWT (User Access Token)",
    params: {
      confessionId: "string",
      feedbackId: "string"
    },
    body: {
      content: "string"
    }
  },
  {
    group: "Feedback",
    method: "DELETE",
    path: "/users/feedback/{confessionId}/{feedbackId}",
    description: "Delete feedback",
    auth: "JWT (User Access Token)",
    params: {
      confessionId: "string",
      feedbackId: "string"
    }
  },

  // ================= ADMIN =================
  {
    group: "Admin",
    method: "GET",
    path: "/admin",
    description: "Get all users",
    auth: "JWT (Admin Access Token)"
  },
  {
    group: "Admin",
    method: "POST",
    path: "/admin",
    description: "Add a new admin",
    auth: "JWT (Admin Access Token)",
    body: {
      name: "string",
      password: "string"
    }
  },
  {
    group: "Admin",
    method: "PUT",
    path: "/admin/me",
    description: "Update admin profile",
    auth: "JWT (Admin Access Token)"
  },
  {
    group: "Admin",
    method: "DELETE",
    path: "/admin/me",
    description: "Delete admin account",
    auth: "JWT (Admin Access Token)"
  },
  {
    group: "Admin",
    method: "GET",
    path: "/admin/report",
    description: "Get all reports",
    auth: "JWT (Admin Access Token)"
  },
  {
    group: "Admin",
    method: "GET",
    path: "/admin/report/{id}",
    description: "Get report by ID",
    auth: "JWT (Admin Access Token)",
    params: {
      id: "string"
    }
  },
  {
    group: "Admin",
    method: "GET",
    path: "/admin/report/pending",
    description: "Get pending reports",
    auth: "JWT (Admin Access Token)"
  },
  {
    group: "Admin",
    method: "GET",
    path: "/admin/report/pending/{id}",
    description: "Get pending report by ID",
    auth: "JWT (Admin Access Token)",
    params: {
      id: "string"
    }
  },
  {
    group: "Admin",
    method: "PATCH",
    path: "/admin/report/Reviewed/{id}",
    description: "Review or resolve a report",
    auth: "JWT (Admin Access Token)",
    params: {
      id: "string"
    },
    body: {
      status: "APPROVED | REJECTED"
    }
  }
];

function Api() {
  const [selectedEndpoint, setSelectedEndpoint] = useState(0);
  const endpoint = apiEndpoints[selectedEndpoint];

  return (
    <main className="container-page py-10 sm:py-14">
      <header className="mb-10 space-y-4">
        <p className="kicker">API Documentation</p>
        <h1 className="text-4xl font-extrabold text-slate-50">
          JWT Authentication & API Guide
        </h1>
        <p className="text-slate-300 max-w-3xl">
          Public endpoints require no authentication. Protected endpoints require
          a JWT token sent via the Authorization header.
        </p>
        <Link to="/" className="text-sm text-slate-300 hover:text-slate-50">
          ← Back to landing
        </Link>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-[320px_1fr] gap-6">
        <aside className="card p-4 h-[70vh] overflow-y-auto">
          <p className="kicker mb-4">Endpoints</p>
          <ul className="space-y-1">
            {apiEndpoints.map((item, idx) => (
              <li key={idx}>
                <button
                  onClick={() => setSelectedEndpoint(idx)}
                  className={`w-full text-left text-sm rounded-lg px-3 py-2 transition ${
                    idx === selectedEndpoint
                      ? "bg-indigo-500/20 text-slate-50 border border-indigo-500/40"
                      : "text-slate-300 hover:bg-gray-800/50"
                  }`}
                >
                  <span className="font-mono font-semibold">{item.method}</span>{" "}
                  <span className="text-xs">{item.path}</span>
                </button>
              </li>
            ))}
          </ul>
        </aside>

        <section className="card p-6 space-y-4">
          <code className="text-indigo-400 font-mono text-lg">
            {endpoint.method} {endpoint.path}
          </code>

          <p className="text-slate-300">{endpoint.description}</p>

          <p>
            <span className="text-sm px-2 py-1 rounded bg-indigo-500/20 text-indigo-400 border border-indigo-500/40">
              {endpoint.auth}
            </span>
          </p>

          {endpoint.body && (
            <pre className="bg-slate-900/50 p-4 rounded text-sm text-slate-300">
              {JSON.stringify(endpoint.body, null, 2)}
            </pre>
          )}

          {endpoint.params && (
            <pre className="bg-slate-900/50 p-4 rounded text-sm text-slate-300">
              {JSON.stringify(endpoint.params, null, 2)}
            </pre>
          )}
        </section>
      </section>
    </main>
  );
}

export default Api;
