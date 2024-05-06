import { useCreatePlaylistFromIds } from '../../hooks/useCreatePlaylistFromIds';
import { Button } from '../ui/button';

export function CreatePlaylist({
  name,
  uris,
}: {
  name: string;
  uris: string[];
}) {
  const createdPlaylistId = useCreatePlaylistFromIds(name, uris);

  return (
    createdPlaylistId && (
      <a href={createdPlaylistId} target="_blank">
        <Button className="bg-spotify-green text-base hover:bg-spotify-green-100">
          Open on Spotify
        </Button>
      </a>
    )
  );
}
