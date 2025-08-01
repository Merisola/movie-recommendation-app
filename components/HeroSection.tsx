import React, { useState, useEffect } from "react";
import { Movie } from "../types/movie";

interface HeroSectionProps {
  movies: Movie[];
  intervalMs?: number;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  movies,
  intervalMs = 5000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    if (!movies || movies.length === 0) return;

    const interval = setInterval(() => {
      setFade(false); // start fade out
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % movies.length);
        setFade(true); // fade in new slide
      }, 500); // fade duration matches CSS below
    }, intervalMs);

    return () => clearInterval(interval);
  }, [movies, intervalMs]);

  if (!movies || movies.length === 0) {
    return <div>Loading featured movies...</div>;
  }

  const movie = movies[currentIndex];

  return (
    <div
      style={{
        position: "relative",
        height: "60vh",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "2rem",
        backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "opacity 0.5s ease-in-out",
        opacity: fade ? 1 : 0,
      }}
    >
      {/* Overlay for better readability */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.8) 100%)",
          zIndex: 1,
        }}
      />
      <h1
        style={{
          fontSize: "2.5rem",
          marginBottom: "1rem",
          position: "relative",
          zIndex: 2,
        }}
      >
        {movie.title}
      </h1>
      <p
        style={{
          maxWidth: "600px",
          marginBottom: "1.5rem",
          position: "relative",
          zIndex: 2,
        }}
      >
        {movie.overview}
      </p>
      <button
        style={{
          position: "relative",
          backgroundColor: "#e50914",
          color: "#fff",
          padding: "0.5rem 1rem",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          width: "fit-content",
          zIndex: 2,
        }}
      >
        Add to Favorites
      </button>
    </div>
  );
};

export default HeroSection;
