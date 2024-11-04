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

export interface DropZoneTextProps {
  isDragActive: boolean;
  movieFile: File | null;
  isMobile: boolean;
}

export interface MenuContextType {
  isOpen: boolean;
  toggleIsOpen: () => void;
}

export interface MovieContextDto extends UploadScreensState, UseMoviesDto {
  dispatch: React.Dispatch<ScreenKey>;
}

export interface MoviesDto {
  id: number;
  backdropPath: string;
  title: string;
  voteAverage: number;
  releaseDate: string;
  imgUrl: string;
  isUserMovie?: boolean;
}

export type ScreenKey = 'loading' | 'dropzone' | 'loaded' | 'uploaded' | 'error';

export interface UploadScreensState {
  screen: string;
  component: JSX.Element;
  nextScreen: string;
}

export interface UseDropDownDto {
  currentCategory: Category;
  availableMovieCategories: Record<CategoryKey, Category>;
  isOpen: boolean;
  handleDropDownClick: () => void;
  handleCategoryItemClick: (tag: CategoryKey) => void;
}

export interface UseMoviesDto {
  currentCategory: Category;
  availableMovieCategories: Record<CategoryKey, Category>;
  movies: MoviesDto[];
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

export interface UseToggleDto {
  isOpen: boolean;
  toggleIsOpen: () => void;
}
