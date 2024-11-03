import { useEffect, useState } from "react";
import { fetchRandomMovies } from "../data/rest/liteflixRest";
import { MoviesDto } from "../types/liteflixTypes";

export const useRandomMovie = () => {
  const [currentRandomMovie, setCurrentRandomMovie] = useState<MoviesDto>(
    {} as MoviesDto
  );
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [bunchOfRandomMovies, setBunchOfRandomMovies] = useState<MoviesDto[]>([]);
  const [alreadyShownMovies, setAlreadyShownMovies] = useState<number[]>([]);

  //TODO REFACTOR
  const changeMovieBackground = (url: string) => {
    const movieBackground = document.querySelector("#movie-background") as HTMLImageElement | null;
    const backgroundUrl =
      "https://image.tmdb.org/t/p/" +
      (window.innerWidth <= 800 ? "w500" : "original") +
      "/" +
      url;

    movieBackground?.setAttribute("src", backgroundUrl);
  };

  const getBunchOfRandomMovies = async () => {
    setIsLoading(true);

    const movies: MoviesDto[] = await fetchRandomMovies();
    setBunchOfRandomMovies(movies);

    if (movies.length > 0) {
      changeMovieBackground(movies[0].backdrop_path);
      setCurrentRandomMovie(movies[0]);
      setAlreadyShownMovies([movies[0].id]);
    }

    setIsLoading(false);
  };

  const pickRandomMovie = (intervalId: NodeJS.Timeout) => {
    const movieNotShown = bunchOfRandomMovies.find(
      (movie) => !alreadyShownMovies.includes(movie.id)
    );

    if (movieNotShown) {
      changeMovieBackground(movieNotShown.backdrop_path);
      setCurrentRandomMovie(movieNotShown);
      setAlreadyShownMovies((prev) => [...prev, movieNotShown.id]);

      if (alreadyShownMovies.length + 1 === bunchOfRandomMovies.length) {
        clearInterval(intervalId);
      }
    }
  };

  useEffect(() => {
    getBunchOfRandomMovies();
  }, []);

  useEffect(() => {
    const intervalId: NodeJS.Timer = setInterval(() => pickRandomMovie(intervalId), 8000);
    return () => clearInterval(intervalId);
  }, [bunchOfRandomMovies]);

  return {
    currentRandomMovie,
    isLoading,
  };
};