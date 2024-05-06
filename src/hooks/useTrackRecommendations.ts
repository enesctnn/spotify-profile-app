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
    queryKey: ['recommendations', token, playlist_id, playlistTrackIds?.ids],
    queryFn: ({ signal }) =>
      fetchTrackRecommendations(token, playlistTrackIds!.ids, signal),
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    enabled: !!playlistTrackIds?.ids && playlistTrackIds.ids.length > 0,
  });

  const playlistTracks: {
    id: string;
    track_name: string;
    album_name: string;
    img: string;
    duration: string;
    artists: { [key: string]: string };
  }[] = [];

  const uris: string[] = [];

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
          if (item.uri) uris.push(item.uri);
        }
      });
    }
    return {
      playlistTracks,
      playlist_name: playlistTrackIds!.playlist_name,
      uris,
    };
  }

  return null;
}
