import { MoviesDto } from '../../types/liteflixTypes';
import liteflixGwApi from '../liteflixGwApi';
import apiCloudinary from '../apiCloudinary';

export const getSavedMovies = async (): Promise<MoviesDto[]> => {
  try {
    const response = await liteflixGwApi.get('/movie');
    return response.data.slice(-4);
  } catch (error) {
    console.error('Get saved movies error:', error);
    return [];
  }
};

export const fetchPopularMovies = async (): Promise<MoviesDto[]> => {
  try {
    const response = await liteflixGwApi.get('/movie/popular');
    return response.data.slice(-4);
  } catch (error) {
    console.error('Fetch popular movies error:', error);
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
    console.error('Fetch random movies error:', error);
    return [];
  }
};

const uploadImageToCloudinary = async (file: File): Promise<string | null> => {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET || '');

  try {
    const response = await apiCloudinary.post('/upload', formData);
    return response.data.secure_url;
  } catch (error) {
    console.error('Uploading to Cloudinary Error:', error);
    return null;
  }
};

export const uploadMovieToDb = async (movieFile: File, movieTitle: string) => {
  const fileUrl = await uploadImageToCloudinary(movieFile);
  if (fileUrl) {
    try {
      const response = await liteflixGwApi.post('/movie', {
        title: movieTitle,
        imgUrl: fileUrl,
      });
      return response.data;
    } catch (error) {
      console.error('Upload movie to db error:', error);
    }
  } else {
    console.error('File upload to Cloudinary failed');
  }
};
