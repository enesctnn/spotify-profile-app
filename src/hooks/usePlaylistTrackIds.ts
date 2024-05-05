import { useQuery } from '@tanstack/react-query';
import { getAuthToken } from '../ui/auth';
import { fetchPlaylistById } from '../util/http-spotify';

export function usePlaylistTrackIds(id: string) {
  const token = getAuthToken();
  if (!token) throw new Error('Missing token!');

  const { data } = useQuery({
    queryKey: ['playlist', token, id],
    queryFn: ({ signal }) => fetchPlaylistById(token, id, signal),
  });

  const playlistTrackIds: string[] = [];

  if (data && data.tracks) {
    data.tracks.items.forEach(item => {
      if (item.track && item.track.id) playlistTrackIds.push(item.track.id);
    });
    
    return playlistTrackIds;
  }

  return null;
}
