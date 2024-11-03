import axios, { AxiosInstance } from 'axios';
// import getConfig from "next/config";

// const { publicRuntimeConfig } = getConfig();

// const { cloudinaryBaseUrl, cloudinaryCloudName } = publicRuntimeConfig;
//TODO ADD ENV VARIABLES y PASAR Al GATEWAY
const apiCloudinary: AxiosInstance = axios.create({
  // baseURL: `${cloudinaryBaseUrl}/v1_1/${cloudinaryCloudName}`,
  baseURL: `https://api.cloudinary.com/v1_1/luckystoned`,
});

export default apiCloudinary;
