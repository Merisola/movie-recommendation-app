
export interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  backdrop_path: string | null;
  vote_average: number;
}
