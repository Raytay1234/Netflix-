import React, { useState } from "react";

const PLACEHOLDER = "https://placehold.co/300x445?text=No+Poster";

export default function MovieCard({ movie }) {
  const { title, name, poster_path } = movie;
  const displayTitle = title || name || "Untitled";
  const imageUrl = poster_path
    ? `https://image.tmdb.org/t/p/w500${poster_path}`
    : PLACEHOLDER;

  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative cursor-pointer transform transition-transform duration-300"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className={`rounded-md overflow-hidden bg-gray-800 shadow-lg transition-transform duration-300
          ${hovered ? "scale-105 z-10" : "scale-100"}
          w-32 sm:w-36 md:w-40 lg:w-44 h-48 sm:h-56 md:h-64 lg:h-72
        `}
      >
        <img src={imageUrl} alt={displayTitle} className="w-full h-full object-cover" />
      </div>
    </div>
  );
}
