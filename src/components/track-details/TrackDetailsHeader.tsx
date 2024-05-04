import { useParams } from 'react-router-dom';
import { useTrackById } from '../../hooks/useTrackById';
import { TrackAudioPlayer } from '../audio/TrackAudioPlayer';
import { Button } from '../ui/button';
import { LoadingSkeleton } from '../ui/loading-skeleton';

export function TrackDetailsHeader() {
  const { id } = useParams();
  if (!id) throw new Error('Missing Track Id!');

  const trackData = useTrackById(id);
  return (
    <>
      {' '}
      {!trackData && <LoadingSkeleton />}
      <article className="w-full">
        {trackData && (
          <div className="flex items-center justify-center gap-5 max-md:flex-col max-md:text-center md:items-start md:justify-start">
            <div className="flex h-60 w-60 shrink-0 md:h-80 md:w-80">
              <img
                src={trackData.img}
                alt={trackData.track_name + ' named music group image'}
                className="object-cover object-center"
              />
            </div>
            <div className="flex flex-col font-bold max-md:gap-8 md:h-80">
              <header className="text-spotify-gray-100 max-md:space-y-3">
                <h1 className="text-3xl text-white">{trackData.track_name}</h1>
                <h2 className="text-lg">{trackData.artists.join('-')}</h2>
                <h3>
                  {trackData.album_name} · {trackData.release_year}
                </h3>
              </header>
              <figure className="mt-auto flex flex-col gap-3">
                <figcaption className="text-spotify-blue text-start">
                  Preview Track:
                </figcaption>
                {trackData.preview_url && (
                  <TrackAudioPlayer
                    src={trackData.preview_url}
                    artists={trackData.artists}
                    track_name={trackData.track_name}
                  />
                )}
                <a
                  href={trackData.spotify_url}
                  target="_blank"
                  title="Open Spotify"
                  aria-label={
                    'Opens The ' +
                    trackData.track_name +
                    ' Track on Spotify In the Blank Page'
                  }
                >
                  <Button className="hover:bg-spotify-green-100">
                    Play It On Spotify
                  </Button>
                </a>
              </figure>
            </div>
          </div>
        )}
      </article>
    </>
  );
}
