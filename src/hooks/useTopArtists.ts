import { useQuery } from '@tanstack/react-query';
import { fetchUserTopArtists } from '../util/http-spotify';
import { getAuthToken } from '../ui/auth';

export function useTopArtists(
  time_range: 'short_term' | 'medium_term' | 'long_term',
  limit?: number
) {
  const token = getAuthToken();
  if (!token) throw new Error('Missing token');

  const { data } = useQuery({
    queryKey: ['user-top-artists', token, time_range, limit],
    queryFn: ({ signal }) =>
      fetchUserTopArtists(token, time_range, signal, limit),
  });
  const userTopArtists: { id: string; band_name: string; img: string }[] = [];

  if (data) {
    data.items.forEach(item =>
      userTopArtists.push({
        id: item.id,
        band_name: item.name,
        img: item.images[0].url,
      })
    );
    return userTopArtists;
  }

  return null;
}
