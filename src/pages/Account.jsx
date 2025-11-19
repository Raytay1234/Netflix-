// pages/Account.jsx
import React from "react";

export default function Account({ setPage, user }) {
    return (
        <div className="min-h-screen bg-gray-900 text-white pt-20 px-6 md:px-12">
            <h1 className="text-4xl font-bold mb-4">Account Settings</h1>
            <p className="text-gray-400 mb-8">
                Manage your Netflix account, billing info, and subscription plan.
            </p>

            {user ? (
                <div className="bg-gray-800 p-6 rounded-md shadow-lg max-w-3xl mb-8">
                    <p className="mb-2">
                        <span className="text-gray-400">Name:</span> {user.name }
                    </p>
                    <p className="mb-2">
                        <span className="text-gray-400">Email:</span> {user.email}
                    </p>
                    <p className="mb-2">
                        <span className="text-gray-400">Plan:</span> {user.plan || "Basic"}
                    </p>
                    <p className="mb-2">
                        <span className="text-gray-400">Billing:</span>{" "}
                        {user.billing || "Next billing: TBD"}
                    </p>
                </div>
            ) : (
                <p className="text-gray-400 mb-4">No user info available.</p>
            )}

            <div className="flex flex-col md:flex-row gap-4 mb-8 max-w-3xl">
                <button
                    onClick={() => setPage("profile")}
                    className="bg-gray-700 px-4 py-2 rounded hover:bg-gray-600 transition"
                >
                    Back to Profile
                </button>
                <button
                    onClick={() => setPage("home")}
                    className="bg-gray-700 px-4 py-2 rounded hover:bg-gray-600 transition"
                >
                    Browse Movies
                </button>
            </div>

            <div className="max-w-3xl">
                <button
                    onClick={() => setPage("signin")}
                    className="bg-red-600 px-4 py-2 rounded hover:bg-red-700 transition"
                >
                    Logout
                </button>
            </div>
        </div>
    );
}
