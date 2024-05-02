import { useQuery } from '@tanstack/react-query';
import { fetchUserPlaylists } from '../util/http-spotify';

export function useUserPlaylists(limit?: number) {
  const token = localStorage.getItem('token');

  if (!token) throw new Error('Missing token');

  const { data } = useQuery({
    queryKey: ['user-playlists', token, limit],
    queryFn: ({ signal }) => fetchUserPlaylists(token, signal, limit),
  });
  if (data)
    return {
      playlist_count: +data.items.length,
      playlists: data.items,
      
    };
  return null;
}
