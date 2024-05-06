import { useUserPlaylists } from '../../hooks/useUserPlaylists';
import { PathLink } from '../shared/PathLink';
import { LoadingSkeleton } from '../ui/loading-skeleton';

export function UserPlaylists() {
  const userPlaylists = useUserPlaylists();

  return (
    <>
      {!userPlaylists && <LoadingSkeleton />}
      <ul className="flex flex-wrap gap-x-4 gap-y-10">
        {userPlaylists &&
          userPlaylists.userPlaylistData.map(
            ({ id, img, playlist_name, tracks_count }) => (
              <li key={id} className="mx-auto w-52 ">
                <PathLink
                  path="playlists"
                  id={id}
                  className="w-full space-y-5 text-center transition-opacity"
                >
                  <div className="w-full overflow-hidden shadow-md shadow-black duration-500 hover:opacity-50">
                    {img && (
                      <img
                        className="object-cover object-center"
                        src={img}
                        alt={playlist_name + ' spotify playlist image'}
                        loading="lazy"
                      />
                    )}
                  </div>
                  <section className="drop-shadow-sm">
                    <h3
                      className="truncate font-bold text-spotify-gray-100 decoration-white underline-offset-2 hover:underline"
                      aria-label="spotify playlist name"
                    >
                      {playlist_name}
                    </h3>
                    <p className="truncate text-xs font-semibold text-spotify-gray-100">
                      {tracks_count} TRACKS
                    </p>
                  </section>
                </PathLink>
              </li>
            )
          )}
      </ul>
    </>
  );
}
