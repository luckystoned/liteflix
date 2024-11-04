import { createApiAxios } from './createApiAxios';

//TODO USE ENV VAR
const liteflixGwApi = createApiAxios("http://localhost:3000");

export default liteflixGwApi;
