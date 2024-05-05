import { useQuery } from '@tanstack/react-query';
import { getMinutesFromMiliseconds } from '../lib/time';
import { getAuthToken } from '../ui/auth';
import { fetchTrackRecommendations } from '../util/http-spotify';
import { usePlaylistTrackIds } from './usePlaylistTrackIds';

export function useTrackRecommendations(playlist_id: string) {
  const token = getAuthToken();
  if (!token) throw new Error('Missing token!');

  const playlistTrackIds = usePlaylistTrackIds(playlist_id);

  const { data } = useQuery({
    queryKey: ['recommendations', token, playlist_id, playlistTrackIds],
    queryFn: ({ signal }) =>
      fetchTrackRecommendations(token, playlistTrackIds!, signal),
    enabled: !!playlistTrackIds && playlistTrackIds.length > 0,
  });

  const playlistTracks: {
    id: string;
    track_name: string;
    album_name: string;
    img: string;
    duration: string;
    artists: { [key: string]: string };
  }[] = [];

  if (data) {
    if (data.tracks) {
      data.tracks.forEach(item => {
        if (item.album) {
          const artists: { [key: string]: string } = {};
          item.album.artists.forEach(artist => {
            const name = artist.name;
            const id = artist.id;
            artists[name] = id;
          });
          playlistTracks.push({
            id: item.id,
            track_name: item.name,
            album_name: item.album.name,
            img: item.album.images[0].url,
            duration: getMinutesFromMiliseconds(item.duration_ms),
            artists,
          });
        }
      });
    }
    return playlistTracks;
  }

  return null;
}
