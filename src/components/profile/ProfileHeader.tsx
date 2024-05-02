import { useLogout } from '../../hooks/useLogout';
import { Button } from '../ui/button';
import noavatar from '/noavatar.png';

export const ProfileHeader = ({
  spotify_url,
  img,
  user_name,
}: {
  spotify_url: string;
  img: string;
  user_name: string;
}) => {
  const logout = useLogout();

  return (
    <header className="mx-4 flex flex-col items-center gap-5 py-5">
      <a
        href={spotify_url}
        className="flex h-40 w-40 overflow-hidden rounded-full opacity-90 shadow-md shadow-black transition-all hover:scale-[1.05] hover:opacity-100"
        target="_blank"
        title="Open Spotify"
      >
        <img
          className="object-cover object-center"
          src={img || noavatar}
          alt="spotify profile picture"
        />
      </a>
      <a
        href={spotify_url}
        className="relative max-w-full transition-colors hover:text-spotify-green-100"
        target="_blank"
        title="Open Spotify"
      >
        <h1 className="truncate pb-2 text-lg sm:text-5xl">{user_name}</h1>
      </a>
      <Button onClick={logout}>Logout</Button>
    </header>
  );
};
