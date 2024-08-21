import { useMutation } from '@tanstack/react-query';
import { createPlaylist } from '../util/http-spotify';
import { useUserDetails } from './useUserDetails';

export function useCreatePlaylistFromIds(name: string) {
  const userData = useUserDetails();

  const description = new Date().toLocaleString('default', {
    day: '2-digit',
    month: 'numeric',
    year: '2-digit',
    hour: 'numeric',
    minute: 'numeric',
  });

  const { mutate, data: playlistData } = useMutation({
    mutationFn: () => createPlaylist(userData!.user_id, name, description),
  });

  return {
    createNewPlaylistMutation: mutate,
    playlistId: playlistData?.id,
  };
}
