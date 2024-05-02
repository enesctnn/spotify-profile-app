import { redirect } from 'react-router-dom';
import { baseUrl } from '../config/baseUrl';

export function getTokenDuration() {
  const storedExpirationDate = localStorage.getItem('spotify_token_expiration');
  if (storedExpirationDate) {
    const expirationDate = new Date(storedExpirationDate);
    const now = new Date();
    const duration = expirationDate.getTime() - now.getTime();
    return duration;
  }
  return null;
}

export function getAuthToken() {
  const token = localStorage.getItem('spotify_access_token');
  const duration = getTokenDuration();

  if (!token) return null;

  console.log('expiration time :' + duration);

  if (!duration || duration <= 0) return 'EXPIRED';

  return token;
}

export function setExpirationToken() {
  const expiration = new Date();
  expiration.setHours(expiration.getHours() + 1);
  localStorage.setItem('spotify_token_expiration', expiration.toISOString());
}

export function tokenLoader() {
  let token = getAuthToken();
  if (!token) {
    const tkn = window.location.hash
      .split('&')
      .find(item => item.startsWith('#access_token'))
      ?.split('=')[1];
    if (tkn) {
      setExpirationToken();
      token = tkn;
      localStorage.setItem('spotify_access_token', String(tkn));
    }
  }
  if (token) return redirect(`${baseUrl}profile`);

  return token;
}

export function checkTokenLoader() {
  const token = getAuthToken();
  if (!token || token === 'EXPIRED') {
    localStorage.removeItem('spotify_access_token');
    localStorage.removeItem('spotify_token_expiration');
    return redirect(baseUrl);
  }

  return token;
}
