import { useQuery } from '@tanstack/react-query';
import { useRouteLoaderData } from 'react-router-dom';
import { fetchUserTopItems } from '../util/http-spotify';

export function useUserTopItems(
  item_type: 'artists' | 'tracks',
  time_range: 'short_term' | 'medium_term' | 'long_term'
) {
  const token = useRouteLoaderData('user-details-root') as string;

  const { data } = useQuery({
    queryKey: ['user-top-items'],
    queryFn: ({ signal }) =>
      fetchUserTopItems(token, item_type, time_range, signal),
    enabled: !!token,
  });

  if (data) return data;

  
}
