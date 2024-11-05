import { useCallback } from 'react';

/**
 * Custom hook to set the movie background image.
 *
 * @returns A callback function that sets the background image based on the provided URL.
 */
export const useMovieBackground = () => {
  return useCallback((url: string) => {
    const movieBackground = document.querySelector('#movie-background') as HTMLImageElement | null;
    const backgroundUrl =
      process.env.REACT_APP_TMDB_IMAGE_BASE_URL + (window.innerWidth <= 800 ? 'w500' : 'original') + '/' + url;
    movieBackground?.setAttribute('src', backgroundUrl);
  }, []);
};
