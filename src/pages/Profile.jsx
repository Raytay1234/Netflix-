import React, { useState } from "react";

export default function Profile({ setPage, setUser, darkMode }) {
  // Load saved profiles from localStorage
  const savedProfiles = JSON.parse(localStorage.getItem("profiles")) || [];
  const [profiles] = useState(savedProfiles);

  const handleSelectProfile = (profile) => {
    setUser(profile); // update current user
    setPage("home");  // go to home page
  };

  const bg = darkMode ? "bg-black text-white" : "bg-gray-100 text-black";
  const cardBg = darkMode ? "bg-gray-800 hover:bg-gray-700" : "bg-white hover:bg-gray-200";
  const secondaryText = darkMode ? "text-gray-400" : "text-gray-600";

  return (
    <div className={`${bg} min-h-screen pt-20 px-6 md:px-12 transition-colors duration-300`}>
      <h1 className="text-4xl font-bold mb-6">Select Profile</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl">
        {profiles.length > 0 ? (
          profiles.map((profile, idx) => (
            <div
              key={idx}
              className={`${cardBg} rounded-lg p-6 flex flex-col items-center cursor-pointer transition-colors duration-300`}
              onClick={() => handleSelectProfile(profile)}
            >
              <div className="w-24 h-24 bg-gray-600 rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                {profile.name.charAt(0).toUpperCase()}
              </div>
              <p className={secondaryText}>{profile.name}</p>
            </div>
          ))
        ) : (
          <p className={`${secondaryText} col-span-full`}>
            No profiles found. Please sign up first.
          </p>
        )}
      </div>

      <div className="mt-10 flex gap-4">
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
