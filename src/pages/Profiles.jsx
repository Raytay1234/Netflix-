import React, { useState } from "react";

// Example avatars
const avatarColors = ["#ef4444", "#f97316", "#facc15", "#22c55e", "#3b82f6", "#a855f7"];

export default function Profiles({ setPage, setUser }) {
  const [profiles, setProfiles] = useState(() => {
    // Lazy initialization avoids synchronous setState inside useEffect
    return JSON.parse(localStorage.getItem("profiles")) || [];
  });

  const handleSelectProfile = (profile) => {
    setUser(profile); // set active user
    localStorage.setItem("activeProfile", JSON.stringify(profile));
    setPage("home"); // go to home
  };

  const handleAddProfile = () => {
    const name = prompt("Enter new profile name:");
    if (!name) return;

    const color = avatarColors[Math.floor(Math.random() * avatarColors.length)];
    const newProfile = { name, email: `${name.toLowerCase()}@example.com`, color };

    const updatedProfiles = [...profiles, newProfile];
    setProfiles(updatedProfiles);
    localStorage.setItem("profiles", JSON.stringify(updatedProfiles));

    handleSelectProfile(newProfile);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-10">Who's watching?</h1>

      <div className="flex flex-wrap gap-8 justify-center">
        {profiles.map((profile, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center cursor-pointer hover:scale-105 transition"
            onClick={() => handleSelectProfile(profile)}
          >
            <div
              className="w-32 h-32 rounded-full flex items-center justify-center text-3xl"
              style={{ backgroundColor: profile.color }}
            >
              {profile.name[0]}
            </div>
            <span className="mt-4 text-lg">{profile.name}</span>
          </div>
        ))}

        {/* Add new profile */}
        <div
          className="flex flex-col items-center cursor-pointer hover:scale-105 transition"
          onClick={handleAddProfile}
        >
          <div className="bg-gray-700 w-32 h-32 rounded-full flex items-center justify-center text-4xl">
            +
          </div>
          <span className="mt-4 text-lg">Add Profile</span>
        </div>
      </div>
    </div>
  );
}
