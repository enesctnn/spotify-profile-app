import { useQuery } from '@tanstack/react-query';
import { fetchPlaylistById } from '../util/http-spotify';

export function usePlaylistTrackIds(id: string) {
  const { data } = useQuery({
    queryKey: ['playlist', id],
    queryFn: ({ signal }) => fetchPlaylistById(id, signal),
    refetchOnWindowFocus: false,
  });

  const ids: string[] = [];

  if (data && data.tracks && data.tracks.items.length > 0) {
    data.tracks.items.forEach(item => {
      if (item.track && item.track.id) {
        ids.push(item.track.id);
      }
    });

    return { ids, playlist_name: data.name };
  }

  return null;
}
