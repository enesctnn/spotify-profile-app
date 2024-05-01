import { REDIRECT_URI } from '../../ui/redirect';
import { Button } from '../ui/button';

export function LoginButton() {
  const CLIENT_ID = import.meta.env.VITE_CLIENT_ID;
  const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize';

  return (
    <Button>
      <a
        href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=token`}
      >
        LOG IN TO SPOTIFY
      </a>
    </Button>
  );
}
