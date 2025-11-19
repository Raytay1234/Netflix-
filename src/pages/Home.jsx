import React, { useState, useEffect } from "react";
import FeaturedBanner from "../components/FeaturedBanner";
import MovieRow from "../components/MovieRow";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

export default function Home({ darkMode }) {
  const [featuredMovie, setFeaturedMovie] = useState(null);
  const [rows, setRows] = useState({
    trending: [], topRated: [], action: [], comedy: [], horror: [], romance: []
  });
  const [loading, setLoading] = useState(true);

  const fetchMovies = async (url) => {
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error("API Error");
      const data = await res.json();
      return data.results || [];
    } catch (err) {
      console.warn("Fetch failed:", err.message);
      return [];
    }
  };

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      const [trending, topRated, action, comedy, horror, romance] = await Promise.all([
        fetchMovies(`${BASE_URL}/trending/movie/week?api_key=${API_KEY}`),
        fetchMovies(`${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US`),
        fetchMovies(`${BASE_URL}/discover/movie?with_genres=28&api_key=${API_KEY}`),
        fetchMovies(`${BASE_URL}/discover/movie?with_genres=35&api_key=${API_KEY}`),
        fetchMovies(`${BASE_URL}/discover/movie?with_genres=27&api_key=${API_KEY}`),
        fetchMovies(`${BASE_URL}/discover/movie?with_genres=10749&api_key=${API_KEY}`)
      ]);

      setRows({ trending, topRated, action, comedy, horror, romance });
      if (trending.length > 0) setFeaturedMovie(trending[Math.floor(Math.random() * trending.length)]);
      setLoading(false);
    };
    load();
  }, []);

  return (
    <div className={`${darkMode ? "bg-black text-white" : "bg-white text-black"} pt-20 min-h-screen`}>
      <FeaturedBanner movie={featuredMovie} isLoading={loading} darkMode={darkMode} />
      <div className="mt-8 space-y-6">
        <MovieRow title="Trending Now" movies={rows.trending} loading={loading} darkMode={darkMode} />
        <MovieRow title="Top Rated" movies={rows.topRated} loading={loading} darkMode={darkMode} />
        <MovieRow title="Action Movies" movies={rows.action} loading={loading} darkMode={darkMode} />
        <MovieRow title="Comedy Movies" movies={rows.comedy} loading={loading} darkMode={darkMode} />
        <MovieRow title="Horror Movies" movies={rows.horror} loading={loading} darkMode={darkMode} />
        <MovieRow title="Romance Movies" movies={rows.romance} loading={loading} darkMode={darkMode} />
      </div>
    </div>
  );
}
