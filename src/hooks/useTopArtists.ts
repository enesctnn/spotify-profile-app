import { useQuery } from '@tanstack/react-query';
import { fetchUserTopArtists } from '../util/http-spotify';

export function useTopArtists(
  time_range: 'short_term' | 'medium_term' | 'long_term',
  limit?: number
) {
  const token = localStorage.getItem('token');

  if (!token) throw new Error('Missing token');

  const { data } = useQuery({
    queryKey: ['user-top-artists', token, time_range],
    queryFn: ({ signal }) =>
      fetchUserTopArtists(token, time_range, signal, limit),
    enabled: !!token,
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
