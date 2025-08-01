import axios from "axios";
import MovieDetailClient from "./MovieDetailClient";

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
interface PageProps {
  params: { id: string };
}

async function fetchMovie(id: string): Promise<MovieDetail> {
  const res = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
  );
  return res.data;
}

export default async function MovieDetailsPage({ params }: PageProps) {
  const movie = await fetchMovie(params.id);

  return <MovieDetailClient movie={movie} />;
}
