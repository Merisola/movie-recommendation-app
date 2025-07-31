"use client"; // Only needed in App Router

import { useEffect, useState } from "react";
import { getTrendingMovies } from "../../services/movieService"; // Use alias if set up
import { Movie } from "../../types/movie"; // Cleaner with alias

export default function HomePage() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data: Movie[] = await getTrendingMovies();
        setMovies(data);
      } catch (err) {
        // Type-safe error handling
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading trending movies...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Trending Movies</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
}
