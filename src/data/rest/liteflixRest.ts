import axios from 'axios';
import { GetSavedMoviesDto, MoviesDto } from '../../types/liteflixTypes';
import liteflixGwApi from '../liteflixGwApi';
import apiCloudinary from '../apiCloudinary';

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

//TODO pasar a custom hook
const uploadToCloudinary = async (file: File): Promise<string | null> => {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', 'liteflix-preset');

  try {
    const response = await apiCloudinary.post('/upload', formData);
    return response.data.secure_url;
  } catch (error) {
    console.error('Error subiendo la imagen a Cloudinary:', error);
    return null;
  }
};

//TODO MOVE TO LITEFLIX GW API
export const uploadMovieToDb = async (movieFile: File, movieTitle: string) => {
  const fileUrl = await uploadToCloudinary(movieFile); // Usa movieFile directamente

  //quitar if
  if (fileUrl) {
    try {
      const response = await liteflixGwApi.post('/movie', {
        title: movieTitle,
        imgUrl: fileUrl,
        //TODO REMOVE GENRE
        tmdbGenreId: 28,
      });
      console.log('Película guardada en la base de datos:', response.data);

      //TODO setIsUploaded(true);
      return response.data;
    } catch (error) {
      console.error('Error guardando la película en la base de datos:', error);
    }
  } else {
    console.log('Error: No se pudo subir la imagen a Cloudinary');
  }
};
