"use client";

import styled from "styled-components";
import { useEffect, useState } from "react";
import { getTrendingMovies } from "../../services/movieService";
import { Movie } from "../../types/movie";
import MovieCard from "../../components/MovieCard";
import Link from "next/link";
import HeroSection from "../../components/HeroSection";
import FavoritesSummary from "../../components/FavoritesSummary";

const Container = styled.div`
  padding: 2rem;
  font-family: sans-serif;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  text-align: center;
  color: #e50914;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const FavoritesLink = styled(Link)`
  display: inline-block;
  background-color: transparent;
  border: 2px solid #e50914;
  color: #e50914;
  padding: 0.4rem 1rem;
  margin-bottom: 2rem;
  border-radius: 20px;
  text-decoration: none;
  font-weight: bold;
  font-size: 1rem;
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

export default function HomePage() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getTrendingMovies();
        setMovies(data);
      } catch (err) {
        if (err instanceof Error) setError(err.message);
        else setError("Unknown error");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <Container>Loading trending movies...</Container>;
  if (error) return <Container>Error: {error}</Container>;

  return (
    <>
      <Container>
        {/* ✅ Hero Section */}
        <HeroSection movies={movies} intervalMs={7000} />

        {/* 🔥 Trending Section (your original logic) */}
        <Title>🔥 Trending Movies</Title>
        <FavoritesLink href="/favorites">❤️ Favorites</FavoritesLink>

        <MovieGrid>
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
        </MovieGrid>

        {/* 🧡 Favorites Summary */}
        <FavoritesSummary />

        {/* 🔮 You can add more MovieRows here for Recommended, Top Rated, etc. later */}
      </Container>
    </>
  );
}
