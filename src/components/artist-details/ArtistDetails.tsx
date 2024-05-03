import { useParams } from 'react-router-dom';
import { useArtistById } from '../../hooks/useArtistById';
import { Card } from '../ui/card';
import { LoadingSkeleton } from '../ui/loading-skeleton';

export function ArtistDetails() {
  const { id } = useParams();
  if (!id) throw new Error('Missing Artist Id!');

  const artistData = useArtistById(id);

  return (
    <Card maxHeightScreen>
      {!artistData && <LoadingSkeleton />}
      {artistData && (
        <article className="flex h-full flex-col items-center justify-center gap-8 font-bold max-sm:my-16">
          <header className="space-y-4">
            <a
              href={artistData.spotify_url}
              target="_blank"
              title="Open Spotify"
            >
              <img
                src={artistData.img}
                alt={artistData.name + ' named music group image'}
                className="mx-auto h-36 w-36  rounded-full shadow shadow-black outline-dashed outline-2 outline-offset-2 transition-transform duration-300 hover:scale-110 sm:h-48 sm:w-48"
              />
            </a>
            <h1
              className="text-center text-3xl font-bold hover:underline"
              title="Open Spotify"
            >
              <a href={artistData.spotify_url} target="_blank">
                {artistData.name}
              </a>
            </h1>
          </header>
          <div className="grid w-full grid-cols-3 justify-evenly text-center text-[#1E71D6] max-sm:grid-cols-1 max-sm:gap-10">
            <section>
              {artistData.followers}
              <h2 className="mt-1 text-sm font-semibold text-spotify-gray-100">
                FOLLOWERS
              </h2>
            </section>
            <section>
              <div className="space-y-3">
                {artistData.genres.map(genre => (
                  <p key={genre} className="capitalize">
                    <span className="text-lg text-white">ᯤ</span> {genre}
                  </p>
                ))}
              </div>
              <h2 className="mt-2 text-xs font-semibold text-spotify-gray-100">
                GENRES
              </h2>
            </section>
            <section>
              %{artistData.popularity}
              <h2 className="mt-1 text-sm font-semibold text-spotify-gray-100">
                POPULARITY
              </h2>
            </section>
          </div>
        </article>
      )}
    </Card>
  );
}
