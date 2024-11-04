import { MoviesDto } from '../../types/liteflixTypes';
import liteflixGwApi from '../liteflixGwApi';
import apiCloudinary from '../apiCloudinary';

export const getSavedMovies = async (): Promise<MoviesDto[]> => {
  try {
    const response = await liteflixGwApi.get('/movie');
    return response.data;
  } catch (error) {
    console.error('Error al obtener las películas guardadas:', error);
    return [];
  }
};

export const fetchPopularMovies = async (): Promise<MoviesDto[]> => {
  try {
    const response = await liteflixGwApi.get('/movie/popular');
    return response.data.slice(-4);
  } catch (error) {
    console.error('Error al obtener las películas populares:', error);
    return [];
  }
};

export const fetchRandomMovies = async (): Promise<MoviesDto[]> => {
  const randomPage = Math.floor(Math.random() * 3) + 1;
  try {
    const response = await liteflixGwApi.get('/movie/now-playing', {
      params: {
        page: randomPage,
      },
    });
    const responseMovies = response.data;
    return responseMovies.slice(-4);
  } catch (error) {
    console.error('Error al obtener las películas aleatorias:', error);
    return [];
  }
};

const uploadImageToCloudinary = async (file: File): Promise<string | null> => {
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
  const fileUrl = await uploadImageToCloudinary(movieFile); // Usa movieFile directamente

  //quitar if
  if (fileUrl) {
    try {
      const response = await liteflixGwApi.post('/movie', {
        title: movieTitle,
        imgUrl: fileUrl,
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
