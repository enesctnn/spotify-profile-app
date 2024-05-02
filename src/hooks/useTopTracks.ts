import { useQuery } from '@tanstack/react-query';
import { fetchUserTopTracks } from '../util/http-spotify';
import { getMinutesFromMiliseconds } from '../lib/time';
import { getAuthToken } from '../ui/auth';

export function useTopTracks(
  time_range: 'short_term' | 'medium_term' | 'long_term',
  limit?: number
) {
  const token = getAuthToken();
  if (!token) throw new Error('Missing token');

  const { data } = useQuery({
    queryKey: ['user-top-tracks', token, time_range, limit],
    queryFn: ({ signal }) =>
      fetchUserTopTracks(token, time_range, signal, limit),
  });
  const userTopTracks: {
    id: string;
    track_name: string;
    album_name: string;
    img: string;
    duration: string;
    artists: string[];
  }[] = [];

  if (data) {
    data.items.forEach(item =>
      userTopTracks.push({
        id: item.id,
        track_name: item.name,
        album_name: item.album.name,
        img: item.album.images[0].url,
        duration: getMinutesFromMiliseconds(item.duration_ms),
        artists: item.album.artists.map(artist => artist.name),
      })
    );
    return userTopTracks;
  }

  return null;
}
