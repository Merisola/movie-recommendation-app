import { useEffect, useState } from "react";
import { Movie } from "../types/movie";

export function useFavorites() {
  const [favorites, setFavorites] = useState<Movie[]>([]);
  const [hasMounted, setHasMounted] = useState(false);

  // Load favorites from localStorage on mount
  useEffect(() => {
    if (typeof window === "undefined") return;

    const stored = localStorage.getItem("favorites");
    if (stored) {
      setFavorites(JSON.parse(stored));
    }

    setHasMounted(true); // mark that we're on the client now
  }, []);

  // Save favorites to localStorage after mount
  useEffect(() => {
    if (typeof window === "undefined" || !hasMounted) return;
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites, hasMounted]);

  const addFavorite = (movie: Movie) => {
    setFavorites((prev) => {
      if (prev.find((m) => m.id === movie.id)) return prev;
      return [...prev, movie];
    });
  };

  const removeFavorite = (id: number) => {
    setFavorites((prev) => prev.filter((m) => m.id !== id));
  };

  const isFavorite = (id: number) => {
    return favorites.some((m) => m.id === id);
  };

  return { favorites, addFavorite, removeFavorite, isFavorite, hasMounted };
}
