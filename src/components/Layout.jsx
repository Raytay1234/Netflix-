import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function Layout({ children, user, darkMode, setDarkMode, setPage }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [collapsed, setCollapsed] = useState(false);
  const [isDesktop, setIsDesktop] = useState(
    typeof window !== "undefined" ? window.innerWidth >= 1024 : true
  );

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // hide UI if user is not logged in
  const hideUI = !user;

  // main content padding
  let mainPadding = "pt-20 transition-all duration-300";
  if (!hideUI) {
    mainPadding += isDesktop
      ? collapsed
        ? " lg:ml-20"
        : " lg:ml-64"
      : " ml-0";
  } else {
    mainPadding = "pt-0"; // no sidebar → no left margin
  }

  return (
    <div
      className={`${darkMode ? "dark bg-black text-white" : "bg-white text-black"
        } min-h-screen transition-colors duration-300`}
    >
      {/* ONLY render navbar/sidebar if user exists */}
      {!hideUI && user && (
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

