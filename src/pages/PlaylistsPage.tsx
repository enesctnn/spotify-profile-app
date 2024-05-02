import { Link } from 'react-router-dom';
import { Card } from '../components/ui/card';
import { useUserPlaylists } from '../hooks/useUserPlaylists';
import { baseUrl } from '../config/baseUrl';

function PlaylistsPage() {
  const userPlaylists = useUserPlaylists();

  return (
    <Card className="space-y-10">
      <header>
        <h1 className="text-xl font-bold">Your Playlists</h1>
      </header>

      <ul className="flex flex-wrap gap-x-4 gap-y-10">
        {userPlaylists &&
          userPlaylists.userPlaylistData.map(
            ({ id, img, playlist_name, tracks_count }) => (
              <li key={id} className="mx-auto w-40">
                <Link
                  to={baseUrl + 'playlists/' + id}
                  className="w-full space-y-5 text-center hover:animate-pulse"
                >
                  <div className="w-full overflow-hidden shadow-md shadow-black">
                    <img
                      className="object-cover object-center"
                      src={img}
                      alt={playlist_name + ' spotify playlist image'}
                    />
                  </div>
                  <section className="drop-shadow-sm">
                    <h3
                      className="truncate font-bold text-spotify-gray-100"
                      aria-label="spotify playlist name"
                    >
                      {playlist_name}
                    </h3>
                    <p className="truncate text-xs font-semibold text-spotify-gray-100">
                      {tracks_count} TRACKS
                    </p>
                  </section>
                </Link>
              </li>
            )
          )}
      </ul>
    </Card>
  );
}

export default PlaylistsPage;
