import { useQuery } from '@tanstack/react-query';
import { fetchUserTopTracks } from '../util/http-spotify';
import { getMinutesFromMiliseconds } from '../lib/time';

export function useTopTracks(
  time_range: 'short_term' | 'medium_term' | 'long_term',
  limit?: number
) {
  const { data } = useQuery({
    queryKey: ['user-top-tracks', time_range, limit],
    queryFn: ({ signal }) => fetchUserTopTracks(time_range, signal, limit),
  });

  const userTopTracks: {
    id: string;
    track_name: string;
    album_name: string;
    img: string;
    duration: string;
    artists: { [key: string]: string };
  }[] = [];

  if (data) {
    data.items.forEach(item => {
      const artists: { [key: string]: string } = {};
      item.album.artists.forEach(artist => {
        artists[artist.name] = artist.id;
      });
      userTopTracks.push({
        id: item.id,
        track_name: item.name,
        album_name: item.album.name,
        img: item.album.images[0].url,
        duration: getMinutesFromMiliseconds(item.duration_ms),
        artists,
      });
    });
    return userTopTracks;
  }

  return null;
}
