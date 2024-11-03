import axios from 'axios';
import { GetSavedMoviesDto, MoviesDto } from '../../types/liteflixTypes';
import liteflixGwApi from '../liteflixGwApi';

export const getSavedMovies = async (): Promise<GetSavedMoviesDto[]> => {
  try {
    const response = await liteflixGwApi.get('/movie');
    const movies = response.data.map((movie: GetSavedMoviesDto) => ({
      ...movie,
      isUserMovie: true,
    }));
    return movies.slice(-4);
  } catch (error) {
    console.error('Error al obtener las películas guardadas:', error);
    return [];
  }
};

//TODO REFACTOR TO USE GW API AND TYPES
export const fetchPopularMovies = async (): Promise<MoviesDto[]> => {
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=6f26fd536dd6192ec8a57e94141f8b20`;
  const response = await axios.get(url);
  const movies = response.data.results;

  return movies.slice(-4);
};

export const fetchRandomMovies = async (): Promise<MoviesDto[]> => {
  const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=6f26fd536dd6192ec8a57e94141f8b20`;
  const response = await axios.get(url);
  const movies = response.data.results;

  return movies.slice(-4);
};
