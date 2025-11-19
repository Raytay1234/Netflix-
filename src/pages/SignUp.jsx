import React, { useState } from "react";

export default function SignUp({ setPage, setUser, darkMode }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();
    const savedProfiles = JSON.parse(localStorage.getItem("profiles")) || [];

    if (savedProfiles.find((p) => p.email === email)) {
      alert("A profile with this email already exists.");
      return;
    }

    const newProfile = { name, email, password, plan: "Basic" };
    const updatedProfiles = [...savedProfiles, newProfile];
    localStorage.setItem("profiles", JSON.stringify(updatedProfiles));

    setUser(newProfile);
    setPage("home");
  };

  const cardBg = darkMode ? "bg-black/80" : "bg-white/90";
  const inputBg = darkMode ? "bg-[#323232] text-white" : "bg-gray-200 text-black";
  const textColor = darkMode ? "text-white" : "text-black";
  const overlay = darkMode
    ? "bg-gradient-to-t from-black/90 via-black/40 to-black/0"
    : "bg-gradient-to-t from-white/90 via-white/50 to-white/0";

  return (
    <div className={`${darkMode ? "bg-black text-white" : "bg-white text-black"} relative w-full h-screen`}>
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/8f7bd2e4-b1cf-41d5-94c3-90d92c1e099f/web/en-GB/large.jpg"
          alt="Background"
          className="w-full h-full object-cover opacity-50"
        />
        <div className={`absolute inset-0 ${overlay}`} />
      </div>

      {/* Sign Up Card */}
      <div className="relative z-10 flex justify-center items-center min-h-screen px-4">
        <div className={`${cardBg} backdrop-blur-md p-8 md:p-12 rounded-md w-full max-w-md shadow-xl`}>
          <h1 className={`text-3xl font-bold mb-6 ${textColor}`}>Sign Up</h1>
          <form onSubmit={handleSignUp} className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={`${inputBg} px-4 py-3 rounded focus:outline-none focus:ring-1 focus:ring-red-600`}
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`${inputBg} px-4 py-3 rounded focus:outline-none focus:ring-1 focus:ring-red-600`}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`${inputBg} px-4 py-3 rounded focus:outline-none focus:ring-1 focus:ring-red-600`}
              required
            />

            <button className="bg-red-600 text-white font-semibold py-3 rounded hover:bg-red-700 transition">
              Sign Up
            </button>
          </form>

          <p className={`mt-6 text-sm ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
            Already have an account?{" "}
            <button
              onClick={() => setPage("signin")}
              className={`${textColor} hover:underline`}
            >
              Sign in
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
