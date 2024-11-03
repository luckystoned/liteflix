export interface GetSavedMoviesDto {
  _id: string;
  title: string;
  imgUrl: string;
  tmdbGenreId: number;
}

export interface MoviesDto {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
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

export interface UploadScreensState {
  screen: string;
  component: JSX.Element;
  nextScreen: string;
}