import React from "react";
import { FaHome, FaTv, FaFilm, FaFire, FaList, FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";

export default function Sidebar({ open, collapsed, setCollapsed, isDesktop, setPage, setSidebarOpen, darkMode }) {
  const navItems = [
    { label: "Home", icon: <FaHome />, page: "home" },
    { label: "TV Shows", icon: <FaTv />, page: "tvshows" },
    { label: "Movies", icon: <FaFilm />, page: "movies" },
    { label: "New & Popular", icon: <FaFire />, page: "new" },
    { label: "My List", icon: <FaList />, page: "mylist" },
  ];

  const bgColor = darkMode ? "bg-gray-900 text-white" : "bg-white text-black";
  const hoverColor = darkMode ? "hover:text-red-500" : "hover:text-red-600";
  const tooltipBg = darkMode ? "bg-gray-800 text-white" : "bg-black text-white";

  return (
    <>
      {!isDesktop && open && <div className="fixed inset-0 bg-black/50 z-30 transition-opacity" onClick={() => setSidebarOpen(false)} />}

      <aside className={`fixed top-0 left-0 h-full z-40 transition-all duration-300
        ${isDesktop ? "" : open ? "translate-x-0" : "-translate-x-full"}
        ${isDesktop ? (collapsed ? "w-20" : "w-64") : "w-64"} ${bgColor}`}
      >
        {!isDesktop && open && (
          <button className="absolute right-4 top-4 text-2xl" onClick={() => setSidebarOpen(false)}>
            <FaTimes className={darkMode ? "text-white" : "text-black"} />
          </button>
        )}

        {isDesktop && (
          <button className="absolute -right-3 top-6 bg-red-600 text-white p-1 rounded-full shadow-lg" onClick={() => setCollapsed(!collapsed)}>
            {collapsed ? <FaChevronRight /> : <FaChevronLeft />}
          </button>
        )}

        <nav className="mt-20 flex flex-col gap-6 px-4 text-lg">
          {navItems.map((item, idx) => (
            <div key={idx} className={`relative flex items-center gap-4 p-2 cursor-pointer transition group ${hoverColor}`}
              onClick={() => { setPage(item.page); if (!isDesktop) setSidebarOpen(false); }}
            >
              <span className="text-xl">{item.icon}</span>
              {!collapsed && <span>{item.label}</span>}
              {collapsed && isDesktop && (
                <span className={`absolute left-full top-1/2 -translate-y-1/2 ml-2 px-2 py-1 rounded opacity-0 group-hover:opacity-100 whitespace-nowrap text-sm z-50 shadow-lg ${tooltipBg}`}>
                  {item.label}
                </span>
              )}
            </div>
          ))}
        </nav>
      </aside>
    </>
  );
}
