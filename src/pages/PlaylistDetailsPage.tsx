import { useParams } from 'react-router-dom';
import { TopListItem } from '../components/shared/TopListItem';
import { Card } from '../components/ui/card';
import { LoadingSkeleton } from '../components/ui/loading-skeleton';
import { usePlaylistById } from '../hooks/usePlaylistById';

function PlaylistDetailsPage() {
  const { id } = useParams();
  if (!id) throw new Error('Missing id!');

  const playlistData = usePlaylistById(id);

  return (
    <Card
      maxHeightScreen
      className="relative gap-4 max-md:flex-col max-md:space-y-10 md:flex"
    >
      {!playlistData && <LoadingSkeleton />}
      {playlistData && (
        <>
          <header className="sticky flex w-full flex-col gap-y-8 max-md:items-center max-md:justify-center md:left-0 md:h-full md:w-80">
            <a
              className="flex"
              href={playlistData.playListFeatures.spotify_url}
              target="_blank"
              title="Open Spotify"
            >
              <img
                src={playlistData.playListFeatures.img}
                alt="user playlist picture"
                className="object-contain object-top shadow-md shadow-black max-md:mx-auto"
              />
            </a>
            <section className="space-y-1 text-center font-bold">
              <a
                href={playlistData.playListFeatures.spotify_url}
                target="_blank"
                title="Open Spotify"
                className="text-4xl hover:underline"
                role="heading"
                aria-level={1}
              >
                {playlistData.playListFeatures.name}
              </a>

              <p className="text-sm text-spotify-gray-100">
                By {playlistData.playListFeatures.owner}
              </p>
            </section>
          </header>
          <ul
            className="md:shadow-inner_1 w-full space-y-1 md:overflow-y-scroll md:rounded-md"
            id="card"
          >
            {playlistData.playlistTracks.map(
              ({ album_name, artists, duration, id, img, track_name }) => (
                <TopListItem
                  key={id}
                  id={id}
                  img={img}
                  artists={artists}
                  track_name={track_name}
                  item_type="tracks"
                  album_name={album_name}
                  duration={duration}
                  className=""
                />
              )
            )}
          </ul>
        </>
      )}
    </Card>
  );
}

export default PlaylistDetailsPage;
