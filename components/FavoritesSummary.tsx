"use client";

import styled from "styled-components";
import { useFavorites } from "../hooks/useFavorites";
import Link from "next/link";

const SummaryBox = styled.div`
  margin-top: 3rem;
  padding: 1.5rem;
  background-color: #1c1c1c;
  color: #fff;
  border-radius: 10px;
  text-align: center;
`;

const Count = styled.span`
  font-size: 1.5rem;
  color: #e50914;
  font-weight: bold;
`;

const StyledLink = styled(Link)`
  display: inline-block;
  margin-top: 1rem;
  padding: 0.5rem 1.2rem;
  border: 2px solid #e50914;
  color: #e50914;
  border-radius: 30px;
  text-decoration: none;
  font-weight: 600;
  transition: 0.2s ease;

  &:hover {
    background-color: #e50914;
    color: #fff;
  }
`;

export default function FavoritesSummary() {
  const { favorites, hasMounted } = useFavorites();

  if (!hasMounted) return null;

  return (
    <SummaryBox>
      <h2>Your Favorites Summary</h2>
      <p>
        You have <Count>{favorites.length}</Count> favorite movie
        {favorites.length !== 1 && "s"}!
      </p>
      {favorites.length > 0 && (
        <StyledLink href="/favorites">View Favorites</StyledLink>
      )}
    </SummaryBox>
  );
}
