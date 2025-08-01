import axios from "axios";
import MovieDetailClient from "./MovieDetailClient";

// Types
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

// Instead of destructuring `params`, keep the whole props object
export default async function Page(props: { params: Promise<{ id: string }> }) {
  const { id } = await props.params; // ✅ await the promise here

  const movie = await fetchMovie(id);
  return <MovieDetailClient movie={movie} />;
}

// Fetch function
async function fetchMovie(id: string): Promise<MovieDetail | null> {
  try {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
    );
    return res.data;
  } catch (error) {
    console.error("Failed to fetch movie:", error);
    return null;
  }
}
