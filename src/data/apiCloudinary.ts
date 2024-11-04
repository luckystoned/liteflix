import { createApiAxios } from './createApiAxios';

const apiCloudinary = createApiAxios(process.env.REACT_APP_CLOUDINARY_BASE_URL || '');

export default apiCloudinary;
