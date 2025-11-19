import React from "react";

const PLACEHOLDER_BANNER = "https://placehold.co/500x750?text=No+Banner";

export default function FeaturedBanner({ movie, darkMode }) {
    if (!movie) return null;

    const imageUrl = movie.backdrop_path
        ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
        : PLACEHOLDER_BANNER;

    const overlayClass = darkMode
        ? "bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-gray-900/0"
        : "bg-gradient-to-t from-white/90 via-white/50 to-white/0";

    const textColor = darkMode ? "text-white" : "text-black";
    const imgBrightness = darkMode ? "brightness-75" : "brightness-100";

    return (
        <div className="relative w-full h-[60vh] md:h-[70vh] lg:h-[80vh] overflow-hidden rounded-md shadow-lg transition-colors duration-300">
            <img
                src={imageUrl}
                alt={movie.title || movie.name}
                className={`w-full h-full object-cover ${imgBrightness} transition-all duration-300`}
            />
            {/* Gradient overlay */}
            <div className={`absolute inset-0 ${overlayClass} transition-colors duration-300`} />
            <div className={`absolute bottom-8 left-8 ${textColor} transition-colors duration-300`}>
                <h1 className="text-2xl md:text-4xl font-bold">{movie.title || movie.name}</h1>
                <p className="mt-2 max-w-lg text-sm md:text-base line-clamp-3">
                    {movie.overview}
                </p>
            </div>
        </div>
    );

}