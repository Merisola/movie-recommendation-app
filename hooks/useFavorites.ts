import { useEffect, useState } from "react";
import { Movie } from "../types/movie";

export default function useFavorites() {
  const [favorites, setFavorites] = useState<Movie[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("favorites");
    if (stored) {
      setFavorites(JSON.parse(stored));
    }
  }, []);

  const saveToLocal = (updated: Movie[]) => {
    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  const isFavorite = (movieId: number) =>
    favorites.some((movie) => movie.id === movieId);

  const addFavorite = (movie: Movie) => {
    if (!isFavorite(movie.id)) {
      const updated = [...favorites, movie];
      setFavorites(updated);
      saveToLocal(updated);
    }
  };

  const removeFavorite = (movieId: number) => {
    const updated = favorites.filter((movie) => movie.id !== movieId);
    setFavorites(updated);
    saveToLocal(updated);
  };

  return {
    favorites,
    isFavorite,
    addFavorite,
    removeFavorite,
  };
}
