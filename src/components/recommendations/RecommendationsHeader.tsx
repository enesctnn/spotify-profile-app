import { useMutation } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useCreatePlaylistFromIds } from '../../hooks/useCreatePlaylistFromIds copy 2';
import { usePlaylistTrackIds } from '../../hooks/usePlaylistTrackIds';
import { useUserDetails } from '../../hooks/useUserDetails';
import { addItemsToPlaylist } from '../../util/http-spotify';
import { PathLink } from '../shared/PathLink';
import { Button } from '../ui/button';

export const RecommendationsHeader = ({
  id,
  playlist_name,
  uris,
}: {
  id: string;
  playlist_name: string;
  uris: string[];
}) => {
  const userData = useUserDetails();

  const tracksData = usePlaylistTrackIds(id);

  const { createNewPlaylistMutation, playlistId } = useCreatePlaylistFromIds(
    `Recommended Songs Based on ${playlist_name}`
  );

  const { mutate: addItemsToCreatedPlaylist, data } = useMutation({
    mutationFn: (id: string) => addItemsToPlaylist(id, uris),
  });

  const handleCreatePlaylistFromRecommendedPlaylist = async () => {
    createNewPlaylistMutation();
  };

  useEffect(() => {
    if (playlistId) {
      addItemsToCreatedPlaylist(playlistId);
    }
  }, [playlistId, addItemsToCreatedPlaylist]);

  return (
    <header className="flex items-center justify-between gap-y-4 max-md:flex-col">
      <h1 className="text-xl font-bold">
        Recommended Tracks Based On “{' '}
        <PathLink
          path="playlists"
          id={id}
          className=" text-spotify-green hover:underline"
        >
          {playlist_name}
        </PathLink>{' '}
        ”
      </h1>
      {!playlistId && userData && tracksData && (
        <Button onClick={handleCreatePlaylistFromRecommendedPlaylist}>
          Save to Spotify
        </Button>
      )}
      {playlistId && data && (
        <a
          href={`https://open.spotify.com/playlist/${playlistId}`}
          target="_blank"
        >
          <Button className="bg-spotify-green text-base hover:bg-spotify-green-100">
            Open on Spotify
          </Button>
        </a>
      )}
    </header>
  );
};
