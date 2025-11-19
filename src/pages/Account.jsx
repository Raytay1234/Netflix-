// pages/Account.jsx
import React from "react";

export default function Account({ setPage, user, darkMode }) {
  const bg = darkMode ? "bg-black text-white" : "bg-gray-100 text-black";
  const cardBg = darkMode ? "bg-gray-800" : "bg-white shadow-md";
  const secondaryText = darkMode ? "text-gray-400" : "text-gray-600";
  const btnBg = darkMode ? "bg-gray-700 hover:bg-gray-600" : "bg-gray-300 hover:bg-gray-400";

  return (
    <div className={`${bg} min-h-screen pt-20 px-6 md:px-12 transition-colors duration-300`}>
      <h1 className="text-4xl font-bold mb-4">Account Settings</h1>
      <p className={`${secondaryText} mb-8`}>
        Manage your Netflix account, billing info, and subscription plan.
      </p>

      {user ? (
        <div className={`${cardBg} p-6 rounded-md shadow-lg max-w-3xl mb-8 transition-colors duration-300`}>
          <p className="mb-2">
            <span className={`${secondaryText}`}>Name:</span> {user.name}
          </p>
          <p className="mb-2">
            <span className={`${secondaryText}`}>Email:</span> {user.email}
          </p>
          <p className="mb-2">
            <span className={`${secondaryText}`}>Plan:</span> {user.plan || "Basic"}
          </p>
          <p className="mb-2">
            <span className={`${secondaryText}`}>Billing:</span> {user.billing || "Next billing: TBD"}
          </p>
        </div>
      ) : (
        <p className={`${secondaryText} mb-4`}>No user info available.</p>
      )}

      <div className="flex flex-col md:flex-row gap-4 mb-8 max-w-3xl">
        <button
          onClick={() => setPage("profile")}
          className={`${btnBg} px-4 py-2 rounded transition-colors duration-300`}
        >
          Back to Profile
        </button>
        <button
          onClick={() => setPage("home")}
          className={`${btnBg} px-4 py-2 rounded transition-colors duration-300`}
        >
          Browse Movies
        </button>
      </div>

      <div className="max-w-3xl">
        <button
          onClick={() => setPage("signin")}
          className="bg-red-600 px-4 py-2 rounded hover:bg-red-700 transition-colors duration-300"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
