import { FaSpotify } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { baseUrl } from '../../config/baseUrl';
import { Button } from '../ui/button';

export const HomeButton = () => (
  <Link to={baseUrl}>
    <Button className="flex items-center gap-5 bg-red-800 hover:bg-red-100">
      Go Back To Spotify Profile <FaSpotify size={25} />
    </Button>
  </Link>
);
