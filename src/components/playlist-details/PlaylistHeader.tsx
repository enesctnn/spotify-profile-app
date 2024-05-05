import { useParams } from 'react-router-dom';
import { PlaylistAnalysis } from './PlaylistAnalysis';
import { PathLink } from '../shared/PathLink';
import { Button } from '../ui/button';

export const PlaylistHeader = ({
  description,
  img,
  name,
  owner,
  spotify_url,
  total,
  owner_url,
}: {
  name: string;
  total: number;
  spotify_url: string;
  img: string;
  owner: string;
  description: string | null;
  owner_url: string;
}) => {
  const { id } = useParams();
  if (!id) throw new Error('Missing id!');

  return (
    <header className="sticky flex w-full flex-col items-center gap-y-8 max-md:justify-center md:left-0 md:h-full">
      <a
        className="mx-auto w-80"
        href={spotify_url}
        target="_blank"
        title="Open Spotify"
      >
        <img
          src={img}
          alt="user playlist picture"
          className="mx-auto object-cover object-top shadow-md shadow-black"
        />
      </a>
      <section className="space-y-2 overflow-hidden text-center font-bold">
        <a
          href={spotify_url}
          target="_blank"
          title="Open Spotify"
          className="text-4xl hover:underline"
          role="heading"
          aria-level={1}
        >
          {name}
        </a>
        {description && (
          <p className="text-sm text-spotify-gray-100 drop-shadow-border">
            {description.split('&#x27;').join("'")}
          </p>
        )}
        <p className="text-sm">{total} Tracks</p>
        <p className="text-spotify-gray-100">
          By{' '}
          <a
            href={owner_url}
            target="_blank"
            className="text-spotify-blue-100 decoration-2 underline-offset-2 hover:underline"
            title="Open Spotify"
          >
            {owner}
          </a>
        </p>
      </section>
      <PlaylistAnalysis />

      <Button className="border-none bg-spotify-green text-sm hover:bg-spotify-green-100">
        <PathLink path="recommendations" id={id}>
          Get Recommendations
        </PathLink>
      </Button>
    </header>
  );
};
