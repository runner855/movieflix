export enum AppUrls {
  UPCOMING = "/upcoming",
  TOP_RATED = "/top_rated",
  POPULAR = "/popular",
  NOWPLAYING = "/now_playing",
}

export enum LanguageEnum {
  IT = "it",
  EN = "en",
}

export type Label = {
  en: string;
  it: string;
};

export interface MoviesProps {
  adult: boolean;
  backdrop_path: string;
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface MoviesDataProps {
  movies: MoviesProps[] | undefined;
}

export interface MovieFilterProps {
  language: string;
  movielanguage: MoviesProps[] | undefined;
}
