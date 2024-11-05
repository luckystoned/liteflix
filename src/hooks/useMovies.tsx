import { useEffect, useState, useCallback } from 'react';
import { fetchPopularMovies, getSavedMovies, uploadMovieToDb } from '../data/rest/liteflixRest';
import { MoviesDto, UseMoviesDto, Category, CategoryKey } from '../types/liteflixTypes';
import { useToggle } from './useToggle';
import { availableMovieCategories } from '../utils';

/**
 * Custom hook to manage movie data and related actions.
 * 
 * @returns {UseMoviesDto} An object containing movie data and functions to interact with it.
 */
export const useMovies = (): UseMoviesDto => {
  const [movieTitle, setMovieTitle] = useState<string>("");
  const [movieFile, setMovieFile] = useState<File>(
    new File([""], "default", { type: "image/png" })
  );
  const [isUploaded, setIsUploaded] = useState<boolean>(false);
  const { isOpen, toggleIsOpen } = useToggle();
  const [currentCategory, setCurrentCategory] = useState<Category>(availableMovieCategories['popular']);
  const [movies, setMovies] = useState<MoviesDto[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  /**
   * Changes the current movie category.
   * 
   * @param {CategoryKey} category - The key of the category to switch to.
   */
  const changeToCategory = useCallback((category: CategoryKey) => {
    setCurrentCategory(availableMovieCategories[category]);
  }, []);

  /**
   * Fetches movies based on the selected category.
   * 
   * @param {Category} category - The category of movies to fetch.
   */
  const getMoviesByCategory = useCallback(async (category: Category) => {
    setIsLoading(true);

    try {
      let fetchedMovies: MoviesDto[] = [];
      switch (category.tag) {
        case 'popular':
          fetchedMovies = await fetchPopularMovies();
          break;
        case 'my_movies':
          fetchedMovies = await getSavedMovies();
          break;
        default:
          fetchedMovies = [];
          console.warn(`No fetch function defined for category: ${category.tag}`);
          break;
      }

      setMovies(fetchedMovies);
    } catch (error) {
      console.error('Error fetching movies:', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  /**
   * Uploads a new movie to the database.
   * 
   * @param {File} movieFile - The movie file to upload.
   * @param {string} movieTitle - The title of the movie.
   */
  const uploadMovie = useCallback(async (movieFile: File, movieTitle: string) => {
    try {
      await uploadMovieToDb(movieFile, movieTitle);
      setIsUploaded(true);
    } catch (error) {
      console.error('Error uploading movie:', error);
    }
  }, []);

  useEffect(() => {
    getMoviesByCategory(currentCategory);
  }, [currentCategory, getMoviesByCategory]);

  return {
    uploadMovie,
    currentCategory,
    availableMovieCategories,
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
