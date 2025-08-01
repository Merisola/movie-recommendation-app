"use client";

import { useFavorites } from "../../../hooks/useFavorites";
import MovieCard from "../../../components/MovieCard";
import styled from "styled-components";
import Link from "next/link";

const Container = styled.div`
  padding: 2rem;
  font-family: sans-serif;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #e50914;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const BackLink = styled(Link)`
  display: inline-block;
  margin-bottom: 1.5rem;
  text-decoration: none;
  color: #e50914;
  font-weight: bold;
  font-size: 1rem;
  border: 2px solid #e50914;
  padding: 0.4rem 1rem;
  border-radius: 20px;
  transition: background-color 0.2s ease, color 0.2s ease;

  &:hover {
    background-color: #e50914;
    color: #fff;
  }

  @media (max-width: 768px) {
    display: block;
    width: 100%;
    text-align: center;
  }
`;

const MovieGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
    gap: 1rem;
  }
`;

export default function FavoritesPage() {
  const { favorites, hasMounted } = useFavorites();

  if (!hasMounted) return null;

  return (
    <Container>
      <BackLink href="/">← Back to Home</BackLink>
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
