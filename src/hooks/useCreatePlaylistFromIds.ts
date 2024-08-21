import { useQuery } from '@tanstack/react-query';
import { addItemsToPlaylist, createPlaylist } from '../util/http-spotify';
import { useUserDetails } from './useUserDetails';

export function useCreatePlaylistFromIds(name: string, uris: string[]) {
  const userData = useUserDetails();

  const description = new Date().toLocaleString('default', {
    day: '2-digit',
    month: 'numeric',
    year: '2-digit',
    hour: 'numeric',
    minute: 'numeric',
  });

  const { data: playlistData } = useQuery({
    queryKey: ['create-playlist', userData?.user_id],
    queryFn: ({ signal }) =>
      createPlaylist(userData!.user_id, name, description, signal),
    refetchOnWindowFocus: false,
    enabled: !!userData,
  });

  const { data } = useQuery({
    queryKey: ['add-tracks', uris, playlistData?.id],
    queryFn: ({ signal }) => addItemsToPlaylist(playlistData!.id, uris, signal),
    refetchOnWindowFocus: false,
    enabled: !!playlistData && !!playlistData.id,
  });

  if (playlistData) console.log(playlistData.id);

  if (data && data.snapshot_id !== null)
    return playlistData!.external_urls.spotify;

  return null;
}
