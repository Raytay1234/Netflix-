import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function Layout({ children, page, darkMode, setDarkMode, setPage }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [collapsed, setCollapsed] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const hideUI = page === "signin" || page === "signup";

  let mainPadding = "pt-20 transition-all duration-300";
  if (!hideUI) {
    mainPadding += isDesktop ? (collapsed ? " lg:ml-20" : " lg:ml-64") : " ml-0";
  }

  return (
    <div className={`${darkMode ? "dark bg-black text-white" : "bg-white text-black"} min-h-screen transition-colors duration-300`}>
      {!hideUI && (
        <>
          <Navbar
            collapsed={collapsed}
            isDesktop={isDesktop}
            darkMode={darkMode}
            setDarkMode={setDarkMode}
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}
            setPage={setPage}
          />
          <Sidebar
            open={sidebarOpen}
            collapsed={collapsed}
            setCollapsed={setCollapsed}
            setSidebarOpen={setSidebarOpen}
            isDesktop={isDesktop}
            setPage={setPage}
            darkMode={darkMode}
          />
        </>
      )}
      <main className={mainPadding}>{children}</main>
    </div>
  );
}
