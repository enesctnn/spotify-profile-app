import { REDIRECT_URI } from '../../ui/redirect';
import { Button } from '../ui/button';

const CLIENT_ID = import.meta.env.VITE_CLIENT_ID;
const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize';
const SCOPE =
  'user-read-private user-read-email user-library-read playlist-read-private user-top-read user-read-recently-played user-read-currently-playing user-follow-read';

export function LoginButton() {
  return (
    <Button className="border-none bg-spotify-green/80 hover:bg-spotify-green">
      <a
        href={`${AUTH_ENDPOINT}?response_type=token&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${SCOPE}`}
      >
        LOG IN TO SPOTIFY
      </a>
    </Button>
  );
}
