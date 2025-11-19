// src/components/Header.jsx
import { FaBars, FaSearch, FaBell, FaUserCircle } from "react-icons/fa";

export default function Header({ onMenuClick }) {
  return (
    <header className="flex items-center justify-between px-6 py-3 bg-black text-white fixed top-0 w-full z-50">
      {/* Left */}
      <div className="flex items-center gap-4">
        <FaBars
          className="text-2xl cursor-pointer md:hidden"
          onClick={onMenuClick}
        />

        <h1 className="text-red-600 text-3xl font-bold cursor-pointer">
          NETFLIX
        </h1>

        {/* Desktop Navbar */}
        <nav className="hidden md:flex ml-10 gap-6 text-sm">
          <a className="hover:text-gray-300 cursor-pointer">Home</a>
          <a className="hover:text-gray-300 cursor-pointer">TV Shows</a>
          <a className="hover:text-gray-300 cursor-pointer">Movies</a>
          <a className="hover:text-gray-300 cursor-pointer">New & Popular</a>
          <a className="hover:text-gray-300 cursor-pointer">My List</a>
        </nav>
      </div>

      {/* Right */}
      <div className="flex items-center gap-6 text-lg">
        <FaSearch className="cursor-pointer" />
        <FaBell className="cursor-pointer" />
        <FaUserCircle className="cursor-pointer text-2xl" />
      </div>
    </header>
  );
}
