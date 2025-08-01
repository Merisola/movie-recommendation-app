"use client";
import { useFavorites } from "../../../hooks/useFavorites";
import MovieCard from "../../../components/MovieCard";

export default function FavoritesPage() {
  const { favorites } = useFavorites();

  return (
    <div style={{ padding: "2rem" }}>
      <h1 style={{ marginBottom: "1rem" }}>❤️ Your Favorite Movies</h1>

      {favorites.length === 0 ? (
        <p>No favorites saved yet.</p>
      ) : (
        <div
          style={{
            display: "grid",
            gap: "1rem",
            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
          }}
        >
          {favorites.map((movie) => (
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
      )}
    </div>
  );
}
