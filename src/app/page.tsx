"use client"; // 👈 This tells Next.js it's a Client Component

import styled from "styled-components";
import { useEffect, useState } from "react";
import { getTrendingMovies } from "../../services/movieService";
import { Movie } from "../../types/movie";
import MovieCard from "../../components/MovieCard";
import SkeletonCard from "../../components/SkeletonCard";
import Link from "next/link";

const Container = styled.div`
  padding: 2rem;
  font-family: sans-serif;
`;

const Title = styled.h1`
  font-size: 2rem;
  text-align: center;
  color: #e50914;
  margin-bottom: 1rem;
`;

const MovieList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 1.5rem;
  list-style: none;
  padding: 0;
`;

const FavoritesLink = styled(Link)`
  display: inline-block;
  background-color: transparent;
  border: 2px solid #e50914;
  color: #e50914;
  padding: 0.4rem 1rem;
  margin-bottom: 1rem;
  border-radius: 20px;
  text-decoration: none;
  font-weight: bold;
  font-size: 1rem;
  transition: background-color 0.2s ease, color 0.2s ease;

  &:hover {
    background-color: #e50914;
    color: #fff;
  }
`;

const MovieItem = styled.li`
  background-color: #111;
  color: #fff;
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
    background-color: #222;
  }
`;

const Poster = styled.img`
  width: 100%;
  border-radius: 4px;
  margin-bottom: 0.5rem;
`;

const MovieGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 1.5rem;
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
    <Container>
      <Title>Trending Movies</Title>
      <FavoritesLink href="/favorites">❤️ Favorites</FavoritesLink>
      {loading ? (
        <MovieGrid>
          {[...Array(10)].map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </MovieGrid>
      ) : (
        <MovieGrid>
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              id={movie.id} // add this
              title={movie.title}
              posterPath={movie.poster_path || ""}
              releaseDate={movie.release_date}
              rating={movie.vote_average}
              overview={movie.overview || ""} // add this
              href={`/movies/${movie.id}`}
            />
          ))}
        </MovieGrid>
      )}
    </Container>
  );
  
}
