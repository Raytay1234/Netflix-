import { FaBars, FaSearch, FaBell, FaUserCircle, FaSun, FaMoon } from "react-icons/fa";

export default function Header({ onMenuClick, darkMode, setDarkMode }) {
  return (
    <header className="flex items-center justify-between px-6 py-3 fixed top-0 w-full z-50
      bg-white text-black dark:bg-black dark:text-white transition-colors duration-300"
    >
      {/* Left */}
      <div className="flex items-center gap-4">
        {/* Mobile menu button */}
        <FaBars
          className="text-2xl cursor-pointer md:hidden"
          onClick={onMenuClick}
        />

        <h1 className="text-red-600 text-3xl font-bold cursor-pointer">NETFLIX</h1>

        {/* Desktop Navbar */}
        <nav className="hidden md:flex ml-10 gap-6 text-sm">
          <a className="hover:text-red-600 transition-colors cursor-pointer">Home</a>
          <a className="hover:text-red-600 transition-colors cursor-pointer">TV Shows</a>
          <a className="hover:text-red-600 transition-colors cursor-pointer">Movies</a>
          <a className="hover:text-red-600 transition-colors cursor-pointer">New & Popular</a>
          <a className="hover:text-red-600 transition-colors cursor-pointer">My List</a>
        </nav>
      </div>

      {/* Right */}
      <div className="flex items-center gap-6 text-lg">
        <FaSearch className="cursor-pointer hover:text-red-600 transition-colors" />
        <FaBell className="cursor-pointer hover:text-red-600 transition-colors" />
        <FaUserCircle className="cursor-pointer text-2xl hover:text-red-600 transition-colors" />

        {/* Theme toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="ml-2 text-lg"
        >
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    </header>
  );
}
