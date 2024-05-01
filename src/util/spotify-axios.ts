import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.spotify.com/v1/',
  headers: { Accept: 'application/json' },
});
