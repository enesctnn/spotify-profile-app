import { useParams } from 'react-router-dom';
import { useSeveralTrackAnalysis } from '../../hooks/useSeveralTrackAnalysis';
import { PathLink } from '../shared/PathLink';
import { Button } from '../ui/button';
import { PlaylistRadarChart } from './PlaylistRadarChart';

export const PlaylistHeader = ({
  description,
  img,
  name,
  owner,
  spotify_url,
  total,
  owner_url,
  followers,
}: {
  name: string;
  total: number;
  spotify_url: string;
  img: string;
  owner: string;
  description: string | null;
  owner_url: string;
  followers: number;
}) => {
  const { id } = useParams();
  if (!id) throw new Error('Missing id!');

  const data = useSeveralTrackAnalysis(id);

  return (
    <header className="flex flex-col items-center gap-y-8 max-md:w-full max-md:justify-center md:h-max md:max-w-80">
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
      <section className="w-full space-y-2 truncate text-center font-bold">
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
          <p className="whitespace-pre-line text-sm text-spotify-gray-100 drop-shadow-border">
            {description.split('&#x27;').join("'")}
          </p>
        )}
        <p>
          {followers} likes · {data?.total_duration} · {total} songs
        </p>
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
      {data?.chartData && <PlaylistRadarChart chartData={data.chartData} />}
      <Button className="border-none bg-spotify-green text-sm hover:bg-spotify-green-100">
        <PathLink path="recommendations" id={id}>
          Get Recommendations
        </PathLink>
      </Button>
    </header>
  );
};
