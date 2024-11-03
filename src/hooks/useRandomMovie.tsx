import { useEffect, useState, useCallback } from "react";
import { fetchRandomMovies } from "../data/rest/liteflixRest";
import { useMovieBackground } from "./useMovieBackground";
import { MoviesDto } from "../types/liteflixTypes";

export const useRandomMovie = () => {
  const [currentRandomMovie, setCurrentRandomMovie] = useState<MoviesDto>({} as MoviesDto);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [randomMovies, setRandomMovies] = useState<MoviesDto[]>([]);
  const [alreadyShownMovies, setAlreadyShownMovies] = useState<number[]>([]);

  const changeMovieBackground = useMovieBackground();

  const getRandomMovies = useCallback(async () => {
    setIsLoading(true);
    const movies = await fetchRandomMovies();
    setRandomMovies(movies);
    setIsLoading(false);

    if (movies.length > 0) {
      const firstMovie = movies[0];
      changeMovieBackground(firstMovie.backdrop_path);
      setCurrentRandomMovie(firstMovie);
      setAlreadyShownMovies([firstMovie.id]);
    }
  }, [changeMovieBackground]);

  const pickRandomMovie = useCallback(() => {
    const movieNotShown = randomMovies.find((movie) => !alreadyShownMovies.includes(movie.id));

    if (movieNotShown) {
      changeMovieBackground(movieNotShown.backdrop_path);
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

  return {
    currentRandomMovie,
    isLoading,
  };
};