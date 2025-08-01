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
      setFade(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % movies.length);
        setFade(true);
      }, 500);
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
      {/* Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.9))",
          zIndex: 1,
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "90%",
          width: "100%",
        }}
      >
        <h1
          style={{
            fontSize: "clamp(1.8rem, 5vw, 3rem)", // scales between 1.8rem and 3rem
            marginBottom: "1rem",
          }}
        >
          {movie.title}
        </h1>
        <p
          style={{
            fontSize: "clamp(0.9rem, 2.5vw, 1.1rem)",
            maxWidth: "600px",
            marginBottom: "1.5rem",
          }}
        >
          {movie.overview}
        </p>
        <button
          style={{
            backgroundColor: "#e50914",
            color: "#fff",
            padding: "0.5rem 1.2rem",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            fontSize: "1rem",
            width: "fit-content",
          }}
        >
          Add to Favorites
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
