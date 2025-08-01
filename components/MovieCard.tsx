"use client";

import styled from "styled-components";
import { motion } from "framer-motion";
import Link from "next/link";
import { useFavorites } from "../hooks/useFavorites";
import { FaHeart, FaRegHeart } from "react-icons/fa";

interface MovieCardProps {
  id: number;
  title: string;
  posterPath: string;
  releaseDate: string;
  rating: number;
  overview: string; // overview is required
  href?: string;
  backdropPath?: string;
}

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: block;
`;

const Card = styled(motion.div)`
  background-color: #111;
  border-radius: 8px;
  overflow: hidden;
  color: #fff;
  box-shadow: 0 0 10px #000;
  text-align: center;
  padding-bottom: 1rem;
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    transform: scale(1.05);
    filter: brightness(1.2);
  }
`;

const Poster = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

const Title = styled.h3`
  font-size: 1rem;
  margin: 0.5rem 0;
`;

const SubText = styled.p`
  margin: 0;
  font-size: 0.85rem;
  color: #ccc;
`;

const FavButton = styled.button`
  position: absolute;
  top: 8px;
  right: 10px;
  background: transparent;
  border: none;
  color: #e50914;
  font-size: 1.2rem;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export default function MovieCard({
  id,
  title,
  posterPath,
  releaseDate,
  rating,
  overview,
  href = "#",
}: MovieCardProps) {
  const { isFavorite, addFavorite, removeFavorite } = useFavorites();

  const toggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault(); // prevent navigation

    const movie = {
      id,
      title,
      poster_path: posterPath,
      release_date: releaseDate,
      vote_average: rating,
      overview,
      backdrop_path: "", // <-- include overview here
    };

    if (isFavorite(id)) {
      removeFavorite(id);
    } else {
      addFavorite(movie);
    }
  };

  return (
    <StyledLink href={href}>
      <Card whileHover={{ scale: 1.05, filter: "brightness(1.2)" }}>
        <FavButton onClick={toggleFavorite}>
          {isFavorite(id) ? <FaHeart /> : <FaRegHeart />}
        </FavButton>
        <Poster
          src={`https://image.tmdb.org/t/p/w500${posterPath}`}
          alt={title}
        />
        <Title>{title}</Title>
        <SubText>Release: {releaseDate}</SubText>
        <SubText>⭐ {rating}/10</SubText>
      </Card>
    </StyledLink>
  );
}
