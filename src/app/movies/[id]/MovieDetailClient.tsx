"use client";

import styled from "styled-components";
import Link from "next/link";

const Container = styled.div`
  max-width: 900px;
  margin: 2rem auto;
  padding: 1rem 2rem;
  color: #fff;
  background-color: #111;
  border-radius: 10px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.7);
`;

const BackLink = styled(Link)`
  color: #e50914;
  text-decoration: none;
  margin-bottom: 1rem;
  display: inline-block;

  &:hover {
    text-decoration: underline;
  }
`;

const MovieWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const Poster = styled.img`
  width: 100%;
  max-width: 300px;
  border-radius: 10px;
  object-fit: cover;
  flex-shrink: 0;
`;

const Info = styled.div`
  flex: 1;
  color: #eee;
`;

const Title = styled.h1`
  margin: 0 0 1rem 0;
`;

const DetailText = styled.p`
  margin: 0.2rem 0;
`;

const GenreTag = styled.span`
  background-color: #e50914;
  padding: 0.3rem 0.6rem;
  margin-right: 0.5rem;
  border-radius: 5px;
  font-size: 0.85rem;
  color: white;
`;

interface Genre {
  id: number;
  name: string;
}

interface MovieDetail {
  id: number;
  title: string;
  overview: string;
  poster_path: string | null;
  release_date: string;
  vote_average: number;
  runtime: number;
  genres: Genre[];
}

interface MovieDetailClientProps {
  movie?: MovieDetail | null;
}

export default function MovieDetailClient({ movie }: MovieDetailClientProps) {
  if (!movie) {
    return (
      <Container>
        <BackLink href="/">← Back to home</BackLink>
        <h2>Sorry, this movie does not exist.</h2>
        <p>
          The movie you&apos;re trying to view could not be found. Please check
          the URL or return home.
        </p>
      </Container>
    );
  }

  return (
    <Container>
      <BackLink href="/">← Back to home</BackLink>

      <MovieWrapper>
        {movie.poster_path && (
          <Poster
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title || "Movie Poster"}
          />
        )}

        <Info>
          <Title>{movie.title}</Title>
          <DetailText>
            <strong>Release Date:</strong> {movie.release_date}
          </DetailText>
          <DetailText>
            <strong>Rating:</strong> {movie.vote_average}/10
          </DetailText>
          <DetailText>
            <strong>Runtime:</strong> {movie.runtime} mins
          </DetailText>
          <DetailText>
            <strong>Genres:</strong>{" "}
            {movie.genres.map((genre) => (
              <GenreTag key={genre.id}>{genre.name}</GenreTag>
            ))}
          </DetailText>
          <DetailText>{movie.overview}</DetailText>
        </Info>
      </MovieWrapper>
    </Container>
  );
}
