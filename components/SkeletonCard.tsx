import styled, { keyframes } from "styled-components";

const shimmer = keyframes`
  0% { background-position: -400px 0; }
  100% { background-position: 400px 0; }
`;

const Skeleton = styled.div`
  height: 280px;
  border-radius: 8px;
  background: #222;
  background-image: linear-gradient(90deg, #222 0px, #333 40px, #222 80px);
  background-size: 600px 100%;
  animation: ${shimmer} 1.5s infinite linear;
`;

export default function SkeletonCard() {
  return <Skeleton />;
}
