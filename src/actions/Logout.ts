import { redirect } from 'react-router-dom';
import { baseUrl } from '../config/baseUrl';

export function action() {
  localStorage.removeItem('token');
  localStorage.removeItem('expiration');
  return redirect(baseUrl);
}
