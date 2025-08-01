import MovieCard from "./MovieCard";
import { Movie } from "../types/movie"; // Adjust the path as needed
import React from "react";

interface MovieRowProps {
  title: string;
  movies: Movie[];
}

const MovieRow: React.FC<MovieRowProps> = ({ title, movies }) => (
  <section style={{ marginBottom: "2rem" }}>
    <h2 style={{ color: "#fff", fontSize: "1.5rem", marginBottom: "1rem" }}>
      {title}
    </h2>
    <div
      style={{
        display: "flex",
        overflowX: "auto",
        gap: "1rem",
        paddingBottom: "1rem",
      }}
    >
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          id={movie.id}
          title={movie.title}
          posterPath={movie.poster_path || ""}
          releaseDate={movie.release_date}
          rating={movie.vote_average}
          overview={movie.overview || ""}
          href={`/movies/${movie.id}`}
        />
      ))}
    </div>
  </section>
);

export default MovieRow;
