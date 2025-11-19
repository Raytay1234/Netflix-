import React, { useState, useEffect } from "react";
import FeaturedBanner from "../components/FeaturedBanner";
import MovieRow from "../components/MovieRow";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

export default function Home() {
  const [featuredMovie, setFeaturedMovie] = useState(null);
  const [rows, setRows] = useState({
    trending: [],
    topRated: [],
    action: [],
    comedy: [],
    horror: [],
    romance: [],
  });

  const [loading, setLoading] = useState(true);

  // Helper fetcher
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

      const [
        trendingData,
        topRatedData,
        actionData,
        comedyData,
        horrorData,
        romanceData,
      ] = await Promise.all([
        fetchMovies(`${BASE_URL}/trending/movie/week?api_key=${API_KEY}`),
        fetchMovies(`${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US`),
        fetchMovies(`${BASE_URL}/discover/movie?with_genres=28&api_key=${API_KEY}`),
        fetchMovies(`${BASE_URL}/discover/movie?with_genres=35&api_key=${API_KEY}`),
        fetchMovies(`${BASE_URL}/discover/movie?with_genres=27&api_key=${API_KEY}`),
        fetchMovies(`${BASE_URL}/discover/movie?with_genres=10749&api_key=${API_KEY}`),
      ]);

      setRows({
        trending: trendingData,
        topRated: topRatedData,
        action: actionData,
        comedy: comedyData,
        horror: horrorData,
        romance: romanceData,
      });

      // Pick featured movie from trending
      if (trendingData.length > 0) {
        const randomIndex = Math.floor(Math.random() * trendingData.length);
        setFeaturedMovie(trendingData[randomIndex]);
      }

      setLoading(false);
    };

    load();
  }, []);

  return (
    <div className="pt-20 bg-gray-900 min-h-screen text-white overflow-x-hidden">

      {/* BANNER */}
      <FeaturedBanner movie={featuredMovie} isLoading={loading} />

      <div className="mt-8 space-y-6">

        {/* MOVIE ROWS */}
        <MovieRow title="Trending Now" movies={rows.trending} loading={loading} />
        <MovieRow title="Top Rated" movies={rows.topRated} loading={loading} />
        <MovieRow title="Action Movies" movies={rows.action} loading={loading} />
        <MovieRow title="Comedy Movies" movies={rows.comedy} loading={loading} />
        <MovieRow title="Horror Movies" movies={rows.horror} loading={loading} />
        <MovieRow title="Romance Movies" movies={rows.romance} loading={loading} />

      </div>

      {/* bottom padding */}
      <div className="h-20"></div>
    </div>
  );
}
