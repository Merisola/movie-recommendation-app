"use client"; // 👈 This tells Next.js it's a Client Component

import styled from "styled-components";
import { useEffect, useState } from "react";
import { getTrendingMovies } from "../../services/movieService";
import { Movie } from "../../types/movie";

const Container = styled.div`
  padding: 2rem;
  font-family: sans-serif;
`;

const Title = styled.h1`
  font-size: 2rem;
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
      <MovieList>
        {movies.map((movie) => (
          <MovieItem key={movie.id}>
            <Poster
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
            />
            <p>{movie.title}</p>
          </MovieItem>
        ))}
      </MovieList>
    </Container>
  );
}
