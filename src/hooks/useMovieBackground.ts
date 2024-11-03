import { useCallback } from "react";
export const useMovieBackground = () => {
    return useCallback((url: string) => {
      const movieBackground = document.querySelector("#movie-background") as HTMLImageElement | null;
      const backgroundUrl =
        "https://image.tmdb.org/t/p/" +
        (window.innerWidth <= 800 ? "w500" : "original") +
        "/" +
        url;
      movieBackground?.setAttribute("src", backgroundUrl);
    }, []);
  };