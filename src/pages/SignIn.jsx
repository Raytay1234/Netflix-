import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function SignIn({ setPage, setUser, darkMode }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSignIn = (e) => {
    e.preventDefault();
    const savedProfiles = JSON.parse(localStorage.getItem("profiles")) || [];
    const profile = savedProfiles.find(
      (p) => p.email === email && p.password === password
    );
    if (profile) {
      setUser(profile);
      setPage("home");
    } else {
      alert("Profile not found or password incorrect. Please sign up first.");
    }
  };

  const cardBg = darkMode ? "bg-black/80" : "bg-white/90";
  const inputBg = darkMode ? "bg-[#323232]" : "bg-gray-200 text-black";
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

      {/* Sign In Card */}
      <div className="relative z-10 flex justify-center items-center min-h-screen px-4">
        <div className={`${cardBg} backdrop-blur-md p-8 md:p-12 rounded-md w-full max-w-md shadow-xl`}>
          <h1 className={`text-3xl font-bold mb-6 ${textColor}`}>Sign In</h1>
          <form onSubmit={handleSignIn} className="flex flex-col gap-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`${inputBg} px-4 py-3 rounded focus:outline-none focus:ring-1 focus:ring-red-600 ${darkMode ? "text-white" : "text-black"}`}
              required
            />
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`${inputBg} w-full px-4 py-3 rounded focus:outline-none focus:ring-1 focus:ring-red-600 ${darkMode ? "text-white" : "text-black"}`}
                required
              />
              <button
                type="button"
                aria-label={showPassword ? "Hide password" : "Show password"}
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
              >
                {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
              </button>
            </div>

            <button className="bg-red-600 text-white font-semibold py-3 rounded hover:bg-red-700 transition">
              Sign In
            </button>
          </form>

          <p className={`mt-6 text-sm ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
            New to Netflix?{" "}
            <button
              onClick={() => setPage("signup")}
              className={`${textColor} hover:underline`}
            >
              Sign up now
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
