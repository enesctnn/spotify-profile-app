import noavatar from '/noavatar.png';

export const ProfileHeader = ({
  spotify_url,
  img,
  user_name,
}: {
  spotify_url: string;
  img: string;
  user_name: string;
}) => (
  <header className="mx-4 flex flex-col items-center gap-1">
    <a
      href={spotify_url}
      className="flex h-40 w-40 overflow-hidden rounded-full"
      target="_blank"
    >
      <img
        className="object-cover object-center"
        src={img || noavatar}
        alt="spotify profile picture"
      />
    </a>
    <a
      href={spotify_url}
      className="hover:text-spotify-green-100 relative max-w-full transition-colors"
    >
      <h1 className="truncate pb-1 text-5xl">{user_name}</h1>
    </a>
  </header>
);
