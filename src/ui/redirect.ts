export const REDIRECT_URI = import.meta.env.PROD
  ? import.meta.env.VITE_RED_REDIRECT_URI
  : 'http://localhost:5173/spotify-profile-app/';
