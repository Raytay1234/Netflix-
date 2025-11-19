import React, { useState, useRef, useEffect } from "react";
import { FaBars, FaSearch, FaBell, FaUserCircle, FaSun, FaMoon } from "react-icons/fa";
import clsx from "clsx";

export default function Navbar({ collapsed, isDesktop, darkMode, setDarkMode, sidebarOpen, setSidebarOpen, setPage }) {
    const [profileOpen, setProfileOpen] = useState(false);
    const profileRef = useRef();

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (profileRef.current && !profileRef.current.contains(event.target)) {
                setProfileOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const paddingLeftClass = isDesktop
        ? collapsed ? "md:pl-20" : "md:pl-64"
        : "pl-4";

    return (
        <nav className={clsx(
            "fixed top-0 left-0 w-full px-4 md:px-6 py-4 flex justify-between items-center transition-all duration-300 z-50",
            darkMode ? "bg-black/80 text-white" : "bg-white/80 text-black",
            paddingLeftClass
        )}>
            <div className="flex items-center gap-4">
                {!isDesktop && (
                    <button onClick={() => setSidebarOpen(!sidebarOpen)} className="text-2xl">
                        <FaBars />
                    </button>
                )}
                <h1 className="text-red-600 text-xl sm:text-2xl md:text-3xl font-extrabold">NETFLIX</h1>
            </div>

            <div className="flex items-center space-x-3 sm:space-x-4 text-lg md:text-xl relative">
                <FaSearch className="cursor-pointer hover:text-red-600 transition-colors" />
                <FaBell className="cursor-pointer hover:text-red-600 transition-colors" />

                {/* User profile */}
                <div ref={profileRef} className="relative">
                    <button onClick={() => setProfileOpen(!profileOpen)} className="flex items-center gap-1 hover:text-red-600 transition-colors">
                        <FaUserCircle size={24} />
                        {isDesktop && <span className="hidden md:inline">User</span>}
                    </button>

                    {profileOpen && (
                        <div className={clsx(
                            "absolute right-0 mt-2 w-48 shadow-lg rounded-md overflow-hidden z-50",
                            darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
                        )}>
                            <button onClick={() => { setPage("profile"); setProfileOpen(false); }} className="block w-full text-left px-4 py-2 hover:bg-gray-800 transition">{/* hover adjusted for dark */}Profile</button>
                            <button onClick={() => { setPage("account"); setProfileOpen(false); }} className="block w-full text-left px-4 py-2 hover:bg-gray-800 transition">Account</button>
                            <button onClick={() => { setPage("signin"); setProfileOpen(false); }} className="block w-full text-left px-4 py-2 hover:bg-gray-800 transition">Logout</button>
                            <button onClick={() => { setDarkMode(!darkMode); setProfileOpen(false); }} className="block w-full text-left px-4 py-2 hover:bg-gray-800 transition">{darkMode ? "Light Mode" : "Dark Mode"}</button>
                        </div>
                    )}
                </div>

                {/* Dark mode toggle */}
                <button onClick={() => setDarkMode(!darkMode)}>
                    {darkMode ? <FaSun /> : <FaMoon />}
                </button>
            </div>
        </nav>
    );
}
