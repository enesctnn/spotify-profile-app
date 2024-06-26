import { REDIRECT_URI } from '../../ui/redirect';
import { Button } from '../ui/button';

const CLIENT_ID = import.meta.env.VITE_CLIENT_ID;
const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize';
const SCOPE =
  'user-read-private user-library-read user-top-read user-read-recently-played user-read-currently-playing user-follow-read playlist-read-private playlist-modify-public playlist-modify-private';

export const LoginButton = () => (
  <Button className="border-none bg-spotify-green/80 hover:bg-spotify-green">
    <a
      href={`${AUTH_ENDPOINT}?response_type=token&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${SCOPE}`}
    >
      LOG IN TO SPOTIFY <span className="ms-1 text-2xl">ᯤ</span>
    </a>
  </Button>
);
