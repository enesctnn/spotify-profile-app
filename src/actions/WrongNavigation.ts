import { redirect } from 'react-router-dom';
import { baseUrl } from '../config/baseUrl';

export const loader = () => redirect(baseUrl);
