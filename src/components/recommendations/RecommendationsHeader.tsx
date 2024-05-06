import { useState } from 'react';
import { usePlaylistTrackIds } from '../../hooks/usePlaylistTrackIds';
import { useUserDetails } from '../../hooks/useUserDetails';
import { PathLink } from '../shared/PathLink';
import { Button } from '../ui/button';
import { CreatePlaylist } from './CreatePlaylist';

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
  const [saveToSpotify, setSaveToSpotify] = useState<boolean>(false);
  const handleSaveToSpotify = () => setSaveToSpotify(true);

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
      {!saveToSpotify && userData && tracksData && (
        <Button onClick={handleSaveToSpotify}>Save to Spotify</Button>
      )}
      {saveToSpotify && (
        <CreatePlaylist
          name={`Recommended Songs Based on ${playlist_name}`}
          uris={uris}
        />
      )}
    </header>
  );
};
