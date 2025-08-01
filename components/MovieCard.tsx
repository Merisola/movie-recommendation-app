"use client";

import styled from "styled-components";
import { motion } from "framer-motion";
import Link from "next/link";

interface MovieCardProps {
  title: string;
  posterPath: string;
  releaseDate: string;
  rating: number;
  href?: string;
}

const Card = styled(motion.div)`
  background-color: #111;
  border-radius: 8px;
  overflow: hidden;
  color: #fff;
  box-shadow: 0 0 10px #000;
  text-align: center;
  padding-bottom: 1rem;
  transition: all 0.3s ease;

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

export default function MovieCard({
  title,
  posterPath,
  releaseDate,
  rating,
  href = "#",
}: MovieCardProps) {
  return (
    <Link
      href={href}
      style={{ textDecoration: "none", color: "inherit", display: "block" }}
    >
      <Card whileHover={{ scale: 1.05, filter: "brightness(1.2)" }}>
        <Poster
          src={`https://image.tmdb.org/t/p/w500${posterPath}`}
          alt={title}
        />
        <Title>{title}</Title>
        <SubText>Release: {releaseDate}</SubText>
        <SubText>⭐ {rating}/10</SubText>
      </Card>
    </Link>
  );
}
