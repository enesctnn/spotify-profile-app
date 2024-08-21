import axios from 'axios';
import { getAuthToken } from '../ui/auth';

export default axios.create({
  baseURL: 'https://api.spotify.com/v1/',
  headers: {
    Accept: 'application/json',
    Authorization: `Bearer ${getAuthToken()}`,
    'Content-Type': 'application/json',
  },
});
