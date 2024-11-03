import { useEffect, useState, useCallback } from 'react';
import { fetchPopularMovies, getSavedMovies, uploadMovieToDb } from '../data/rest/liteflixRest';
import { MoviesDto, GetSavedMoviesDto, UseMoviesDto, Category, CategoryKey } from '../types/liteflixTypes';
import { useToggle } from './useToggle';

//TODO ADD TO UTILS
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
