"use client";

import { useFavorites } from "../../../hooks/useFavorites";
import MovieCard from "../../../components/MovieCard";
import styled from "styled-components";

const Container = styled.div`
  padding: 2rem;
  font-family: sans-serif;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #e50914;
  margin-bottom: 1rem;
`;

const MovieGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 1.5rem;
`;

export default function FavoritesPage() {
  const { favorites, hasMounted } = useFavorites();

  if (!hasMounted) return null;

  return (
    <Container>
      <Title>❤️ Your Favorite Movies</Title>
      {favorites.length === 0 ? (
        <p>No favorites saved yet.</p>
      ) : (
        <MovieGrid>
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
        </MovieGrid>
      )}
    </Container>
  );
}
