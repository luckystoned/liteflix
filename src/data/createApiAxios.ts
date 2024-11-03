import axios from 'axios';

export const createApiAxios = (url: string) => {
  const baseURL = `${url}`;
  const apiAxios = axios.create({
    baseURL,
  });
  return apiAxios;
};
