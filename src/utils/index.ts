import { Category, CategoryKey, UploadScreensState } from '../types/liteflixTypes';

export const initialState = (component: JSX.Element): UploadScreensState => ({
  screen: 'dropzone',
  component,
  nextScreen: 'loading',
});

export const menuListItems: string[] = [
  'Inicio',
  'Series',
  'Peliculas',
  'Agregadas Recientemente',
  'Populares',
  'Mis peliculas',
  'Mi lista',
];
//TODO availableMovieCategories should come from the backend
export const availableMovieCategories: Record<CategoryKey, Category> = {
  popular: {
    title: 'Populares',
    tag: 'popular',
  },
  my_movies: {
    title: 'Mis Peliculas',
    tag: 'my_movies',
  },
};
