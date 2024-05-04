import { useQuery } from '@tanstack/react-query';
import { getMinutesFromMiliseconds } from '../lib/time';
import { getAuthToken } from '../ui/auth';
import { fetchUserRecentlyPlayed } from '../util/http-spotify';

export function useRecentlyPlayed(limit?: number) {
  const token = getAuthToken();
  if (!token) throw new Error('Missing token!');

  const { data } = useQuery({
    queryKey: ['user-recent', token, limit],
    queryFn: ({ signal }) => fetchUserRecentlyPlayed(token, signal, limit),
  });

  const recentlyPlayedData: {
    id: string;
    track_name: string;
    album_name: string;
    duration: string;
    artists: { [key: string]: string };
    img: string;
    played_at: string;
  }[] = [];
  if (data) {
    data.items.forEach(item => {
      const artists: { [key: string]: string } = {};
      item.track.artists.forEach(artist => {
        const name = artist.name;
        const id = artist.id;
        artists[name] = id;
      });
      recentlyPlayedData.push({
        id: item.track.id,
        track_name: item.track.name,
        album_name: item.track.album.name,
        duration: getMinutesFromMiliseconds(item.track.duration_ms),
        artists,
        img: item.track.album.images[0].url,
        played_at: item.played_at,
      });
    });

    return recentlyPlayedData;
  }

  return null;
}
