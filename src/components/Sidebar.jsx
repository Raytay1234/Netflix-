import React from "react";
import {
  FaHome,
  FaTv,
  FaFilm,
  FaFire,
  FaList,
  FaChevronLeft,
  FaChevronRight,
  FaTimes,
} from "react-icons/fa";

export default function Sidebar({
  open,
  collapsed,
  setCollapsed,
  isDesktop,
  setPage,
  setSidebarOpen,
}) {
  const navItems = [
    { label: "Home", icon: <FaHome />, page: "home" },
    { label: "TV Shows", icon: <FaTv />, page: "tvshows" },
    { label: "Movies", icon: <FaFilm />, page: "movies" },
    { label: "New & Popular", icon: <FaFire />, page: "new" },
    { label: "My List", icon: <FaList />, page: "mylist" },
  ];

  return (
    <>
      {/* Overlay for mobile */}
      {!isDesktop && open && (
        <div
          className="fixed inset-0 bg-black/50 z-30 transition-opacity"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full bg-black text-white z-40 transition-all duration-300
          ${isDesktop ? "" : open ? "translate-x-0" : "-translate-x-full"}
          ${isDesktop ? (collapsed ? "w-20" : "w-64") : "w-64"}
        `}
      >
        {/* Close button mobile */}
        {!isDesktop && open && (
          <button
            className="absolute right-4 top-4 text-white text-2xl"
            onClick={() => setSidebarOpen(false)}
          >
            <FaTimes />
          </button>
        )}

        {/* Collapse button desktop */}
        {isDesktop && (
          <button
            className="absolute -right-3 top-6 bg-red-600 text-white p-1 rounded-full shadow-lg"
            onClick={() => setCollapsed(!collapsed)}
          >
            {collapsed ? <FaChevronRight /> : <FaChevronLeft />}
          </button>
        )}

        {/* Navigation */}
        <nav className="mt-20 flex flex-col gap-6 px-4 text-lg">
          {navItems.map((item, idx) => (
            <div
              key={idx}
              className="relative flex items-center gap-4 p-2 cursor-pointer hover:text-red-500 transition group"
              onClick={() => {
                if (item.page) setPage(item.page);
                if (!isDesktop) setSidebarOpen(false);
              }}
            >
              <span className="text-xl">{item.icon}</span>
              {!collapsed && <span>{item.label}</span>}

              {/* Tooltip for collapsed desktop */}
              {collapsed && isDesktop && (
                <span className="absolute left-full top-1/2 -translate-y-1/2 ml-2 bg-black text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 whitespace-nowrap text-sm z-50 shadow-lg">
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
