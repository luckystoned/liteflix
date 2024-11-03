import { useEffect, useState, useCallback } from 'react';
import { fetchPopularMovies, getSavedMovies, uploadMovieToDb } from '../data/rest/liteflixRest';
import { MoviesDto, GetSavedMoviesDto } from '../types/liteflixTypes';
import { useToggle } from './useToggle';


//TODO MOVE INTERFACE TO TYPES
export interface Category {
  title: string;
  tag: CategoryKey;
}

export type CategoryKey = 'popular' | 'my_movies';

const availableCategories: Record<CategoryKey, Category> = {
  popular: {
    title: 'Populares',
    tag: 'popular',
  },
  my_movies: {
    title: 'Mis Peliculas',
    tag: 'my_movies',
  },
};

//TODO PASAR A ARCHIVO DE TIPOS
// Definir el tipo para el hook de estado
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

// Hook personalizado para gestionar las categorías de películas
export const useMovies = (): UseMoviesDto => {
  const [movieTitle, setMovieTitle] = useState<string>("");
  const [movieFile, setMovieFile] = useState<File>(
    new File([""], "default", { type: "image/png" })
  );
  const [isUploaded, setIsUploaded] = useState<boolean>(false);
  const { isOpen, toggleIsOpen } = useToggle();
  const [currentCategory, setCurrentCategory] = useState<Category>(availableCategories['popular']);
  const [movies, setMovies] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Función para cambiar de categoría
  const changeToCategory = useCallback((category: CategoryKey) => {
    setCurrentCategory(availableCategories[category]);
  }, []);

  // Función para obtener las películas según la categoría seleccionada
  //TODO REFACTOR TO JUST DO ONE FETCH FUNCTION THE LOGIC OF WHICH FETCH TO USE SHOULD BE IN THE REST FILE
  const getMoviesByCategory = useCallback(async (category: Category) => {
    setIsLoading(true);

    try {
      let fetchedMovies: (MoviesDto | GetSavedMoviesDto)[] = [];
      switch (category.tag) {
        case 'popular':
          fetchedMovies = await fetchPopularMovies();
          break;
        case 'my_movies':
          fetchedMovies = await getSavedMovies();
          break;
        default:
          fetchedMovies = []; // Default case for future categories
          console.warn(`No fetch function defined for category: ${category.tag}`);
          break;
      }

      setMovies(fetchedMovies);
    } catch (error) {
      console.error('Error al obtener películas:', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const uploadMovie = useCallback(async (movieFile: File, movieTitle: string) => {
    const response = await uploadMovieToDb(movieFile, movieTitle);
    console.log('Película guardada en la base de datos:', response);
  }
  , []);

  // Ejecutar al cambiar de categoría
  useEffect(() => {
    getMoviesByCategory(currentCategory);
  }, [currentCategory, getMoviesByCategory]);

  return {
    uploadMovie,
    currentCategory,
    availableCategories,
    movies,
    isLoading,
    changeToCategory,
    movieTitle,
    movieFile,
    isUploaded,
    isOpen,
    setMovieTitle,
    setMovieFile,
    setIsUploaded,
    toggleIsOpen,
  };
};
