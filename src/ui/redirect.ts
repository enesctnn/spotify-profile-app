import { baseUrl } from '../config/baseUrl';

export const REDIRECT_URI = import.meta.env.PROD
  ? 'https://enesctnn.github.io/spotify-profile-app/'
  : `http://localhost:5173${baseUrl}`;
