interface IMovie {
  vote_count: number;
  id: number;
  video: boolean;
  vote_average: number;
  title: string;
  popularity: number;
  poster_path: string;
  original_language: string;
  original_title: string;
  genre_ids: Array<number>;
  backdrop_path: string;
  adult: boolean;
  overview: string;
  release_date: string;
  is_favorite?: boolean;

  belongs_to_collection: string;
  budget: number;
  genres: Array<object>;
  homepage: string;
  imdb_id: string;
  production_companies: Array<IMovie>;
  revenue: number;
  runtime: number;
  spoken_languages: Array<object>;
  status: string;
  tagline: string;
}
