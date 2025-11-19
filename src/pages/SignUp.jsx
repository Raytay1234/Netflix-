import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function SignUp({ setPage, setUser }) {
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [confirmPassword, setConfirmPassword] = useState("");
const [showPassword, setShowPassword] = useState(false);

const handleSignUp = (e) => {
e.preventDefault();
if (password !== confirmPassword) {
  alert("Passwords do not match!");
  return;
}

// Save user info to localStorage profiles
const savedProfiles = JSON.parse(localStorage.getItem("profiles")) || [];
const newProfile = { name, email, password, plan: "Basic", billing: "Next billing: TBD" };
savedProfiles.push(newProfile);
localStorage.setItem("profiles", JSON.stringify(savedProfiles));

// Update parent App state
setUser(newProfile);

// Redirect to profile page
setPage("profile");
};

return ( <div className="min-h-screen flex items-center justify-center bg-black text-white"> <div className="bg-black/75 p-8 md:p-12 rounded-md w-full max-w-md shadow-lg"> <h1 className="text-3xl font-bold mb-6">Sign Up</h1> <form onSubmit={handleSignUp} className="flex flex-col gap-4">
{/* Username */}
<input
type="text"
placeholder="Username"
value={name}
onChange={(e) => setName(e.target.value)}
required
className="bg-[#323232] text-white px-4 py-3 rounded focus:outline-none focus:ring-1 focus:ring-red-600"
/>
      {/* Email */}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="bg-[#323232] text-white px-4 py-3 rounded focus:outline-none focus:ring-1 focus:ring-red-600"
      />

      {/* Password */}
      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="bg-[#323232] w-full text-white px-4 py-3 rounded focus:outline-none focus:ring-1 focus:ring-red-600"
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
        >
          {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
        </button>
      </div>

      {/* Confirm Password */}
      <input
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        required
        className="bg-[#323232] text-white px-4 py-3 rounded focus:outline-none focus:ring-1 focus:ring-red-600"
      />

      {/* Sign Up Button */}
      <button className="bg-red-600 text-white font-semibold py-3 rounded hover:bg-red-700 transition">
        Create Account
      </button>

      {/* Switch to Sign In */}
      <p className="text-gray-400 mt-4 text-sm">
        Already have an account?{" "}
        <button
          type="button"
          onClick={() => setPage("signin")}
          className="text-white hover:underline"
        >
          Sign in now
        </button>
      </p>
    </form>
  </div>
</div>

);
}
