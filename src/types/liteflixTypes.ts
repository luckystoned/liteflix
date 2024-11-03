import { ReactNode } from 'react';

export interface AddMovieButtonProps {
  size?: string;
}

export interface Category {
  title: string;
  tag: CategoryKey;
}

export type CategoryKey = 'popular' | 'my_movies';

export interface ContextProviderProps {
  children: ReactNode;
}

export interface GetSavedMoviesDto {
  _id: string;
  title: string;
  imgUrl: string;
  tmdbGenreId: number;
}

export interface MenuContextType {
  isOpen: boolean;
  toggleIsOpen: () => void;
}

export interface Movie {
  _id?: string;
  backdrop_path: string;
  title: string;
  isUserMovie?: boolean;
  imgUrl?: string;
  vote_average?: number;
  release_date?: string;
  [key: string]: any;
}

export interface MovieContextDto extends UploadScreensState, UseMoviesDto {
  dispatch: React.Dispatch<ScreenKey>;
}

export interface MovieInfo {
  title: string;
  isUserMovie?: boolean;
  imgUrl?: string;
  backdrop_path?: string;
  vote_average?: number;
  release_date?: string;
}

export interface MoviePreviewProps {
  movieInfo: MovieInfo;
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

export type ScreenKey = 'loading' | 'dropzone' | 'loaded' | 'uploaded' | 'error';

export interface UploadScreensState {
  screen: string;
  component: JSX.Element;
  nextScreen: string;
}

export interface UseMoviesDto {
  currentCategory: Category;
  availableCategories: Record<CategoryKey, Category>;
  movies: any[]; // TODO Ajusta `any` según el tipo específico de datos de tus películas
  isLoading: boolean;
  changeToCategory: (category: CategoryKey) => void;
  movieTitle: string;
  movieFile: File;
  isUploaded: boolean;
  isOpen: boolean;
  uploadMovie: (movieFile: File, movieTitle: string) => Promise<void>;
  setMovieTitle: React.Dispatch<React.SetStateAction<string>>;
  setMovieFile: React.Dispatch<React.SetStateAction<File>>;
  setIsUploaded: React.Dispatch<React.SetStateAction<boolean>>;
  toggleIsOpen: () => void;
}

export interface UseToggle {
  isOpen: boolean;
  toggleIsOpen: () => void;
}
