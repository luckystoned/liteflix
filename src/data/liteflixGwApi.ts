import { createApiAxios } from './createApiAxios';

const liteflixGwApi = createApiAxios(process.env.REACT_APP_LITEFLIX_GW_BASE_URL || '');

export default liteflixGwApi;
