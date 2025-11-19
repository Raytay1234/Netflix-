import React, { useRef, useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import MovieCard from "./MovieCard";

export default function MovieRow({ title, movies, darkMode }) {
  const rowRef = useRef();
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const updateScrollButtons = () => {
    const row = rowRef.current;
    if (!row) return;
    setCanScrollLeft(row.scrollLeft > 0);
    setCanScrollRight(row.scrollLeft + row.offsetWidth < row.scrollWidth - 1);
  };

  useEffect(() => {
    const row = rowRef.current;
    row.addEventListener("scroll", updateScrollButtons);
    updateScrollButtons();
    return () => row.removeEventListener("scroll", updateScrollButtons);
  }, [movies, windowWidth]);

  const scroll = (dir) => {
    const row = rowRef.current;
    const scrollAmount = dir === "left" ? -row.offsetWidth / 2 : row.offsetWidth / 2;
    row.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  const textColor = darkMode ? "text-white" : "text-black";
  const buttonBg = darkMode ? "bg-gray-900/50 hover:bg-gray-800" : "bg-black/50 hover:bg-black";

  return (
    <div className="relative my-6">
      {/* Section Title */}
      <h2 className={`text-lg sm:text-xl md:text-2xl font-bold mb-3 px-2 ${textColor}`}>{title}</h2>

      {/* Left scroll button */}
      {canScrollLeft && (
        <button
          onClick={() => scroll("left")}
          className={`absolute left-0 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full text-white hidden md:flex ${buttonBg} transition-colors`}
        >
          <FaChevronLeft size={20} />
        </button>
      )}

      {/* Movie row */}
      <div
        ref={rowRef}
        className="flex overflow-x-auto scrollbar-hide space-x-2 sm:space-x-3 md:space-x-4 px-2 scroll-smooth touch-pan-x"
      >
        {movies.map((m) => (
          <MovieCard key={m.id || m.imdbID} movie={m} darkMode={darkMode} />
        ))}
      </div>

      {/* Right scroll button */}
      {canScrollRight && (
        <button
          onClick={() => scroll("right")}
          className={`absolute right-0 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full text-white hidden md:flex ${buttonBg} transition-colors`}
        >
          <FaChevronRight size={20} />
        </button>
      )}

      {/* Mobile touch hint overlay */}
      {windowWidth < 768 && (
        <div className="absolute inset-0 pointer-events-none flex justify-between items-center px-2">
          <div className="w-8 h-full" />
          <div className="w-8 h-full" />
        </div>
      )}
    </div>
  );
}
