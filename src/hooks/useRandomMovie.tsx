import { useEffect, useState, useCallback } from "react";
import { fetchRandomMovies } from "../data/rest/liteflixRest";
import { useMovieBackground } from "./useMovieBackground";
import { MoviesDto } from "../types/liteflixTypes";

/**
 * Custom hook to fetch and manage random movies.
 *
 * This hook fetches a list of random movies and provides functionality
 * to cycle through them at regular intervals, updating the background
 * image accordingly.
 *
 * @returns {{ currentRandomMovie: MoviesDto }} The current random movie.
 */
export const useRandomMovie = () => {

  const [currentRandomMovie, setCurrentRandomMovie] = useState<MoviesDto>({} as MoviesDto);

  const [randomMovies, setRandomMovies] = useState<MoviesDto[]>([]);
  const [alreadyShownMovies, setAlreadyShownMovies] = useState<number[]>([]);

  const changeMovieBackground = useMovieBackground();

  /**
   * Fetches random movies from the API and initializes the state.
   *
   * Sets the first movie as the current random movie and updates the background.
   */
  const getRandomMovies = useCallback(async () => {
    const movies = await fetchRandomMovies();
    setRandomMovies(movies);

    if (movies.length > 0) {
      const firstMovie = movies[0];
      changeMovieBackground(firstMovie.backdropPath);
      setCurrentRandomMovie(firstMovie);
      setAlreadyShownMovies([firstMovie.id]);
    }
  }, [changeMovieBackground]);

  /**
   * Picks the next random movie that has not been shown yet.
   *
   * Updates the current movie and background. Resets if all movies have been shown.
   */
  const pickRandomMovie = useCallback(() => {
    const movieNotShown = randomMovies.find((movie) => !alreadyShownMovies.includes(movie.id));

    if (movieNotShown) {
      changeMovieBackground(movieNotShown.backdropPath);
      setCurrentRandomMovie(movieNotShown);
      setAlreadyShownMovies((prev) => [...prev, movieNotShown.id]);
    } else {
      setAlreadyShownMovies([]);
    }
  }, [alreadyShownMovies, randomMovies, changeMovieBackground]);

  useEffect(() => {
    getRandomMovies();
  }, [getRandomMovies]);

  useEffect(() => {
    const intervalId: NodeJS.Timeout = setInterval(pickRandomMovie, 8000);
    return () => clearInterval(intervalId);
  }, [pickRandomMovie]);

  return { currentRandomMovie };
};