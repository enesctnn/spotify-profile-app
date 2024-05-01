import { useQuery } from '@tanstack/react-query';
import { useRouteLoaderData } from 'react-router-dom';
import { fetchUserPlaylists } from '../util/http-spotify';

export function useUserPlaylists(limit?: number) {
  const token = useRouteLoaderData('user-details-root') as string;
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
