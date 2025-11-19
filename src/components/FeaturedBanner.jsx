import React from "react";

const PLACEHOLDER_BANNER = "https://placehold.co/500x750?text=No+Banner";

export default function FeaturedBanner({ movie }) {
    if (!movie) return null;

    const imageUrl = movie.backdrop_path
        ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
        : PLACEHOLDER_BANNER;

    return (
        <div className="relative w-full h-[60vh] md:h-[70vh] lg:h-[80vh] overflow-hidden rounded-md shadow-lg">
            <img
                src={imageUrl}
                alt={movie.title || movie.name}
                className="w-full h-full object-cover brightness-75"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/50 to-black/0" />
            <div className="absolute bottom-8 left-8 text-white">
                <h1 className="text-2xl md:text-4xl font-bold">
                    {movie.title || movie.name}
                </h1>
                <p className="mt-2 max-w-lg text-sm md:text-base line-clamp-3">
                    {movie.overview}
                </p>
            </div>
        </div>
    );
}
