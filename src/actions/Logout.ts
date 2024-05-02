import { redirect } from 'react-router-dom';
import { baseUrl } from '../config/baseUrl';

export function action() {
  localStorage.removeItem('spotify_access_token');
  localStorage.removeItem('spotify_token_expiration');
  return redirect(baseUrl);
}
