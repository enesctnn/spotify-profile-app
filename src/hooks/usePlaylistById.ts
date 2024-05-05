import { useQuery } from '@tanstack/react-query';
import { getMinutesFromMiliseconds } from '../lib/time';
import { getAuthToken } from '../ui/auth';
import { fetchPlaylistById } from '../util/http-spotify';

export function usePlaylistById(id: string) {
  const token = getAuthToken();
  if (!token) throw new Error('Missing token!');

  const { data } = useQuery({
    queryKey: ['playlist', token, id],
    queryFn: ({ signal }) => fetchPlaylistById(token, id, signal),
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
    if (data.tracks && data.tracks.items.length > 0) {
      data.tracks.items.forEach(item => {
        if (
          item.track &&
          item.track.name &&
          item.track.id &&
          item.track.album &&
          item.track.artists
        ) {
          const artists: { [key: string]: string } = {};
          item.track.artists.forEach(artist => {
            const name = artist.name;
            const id = artist.id;
            artists[name] = id;
          });
          playlistTracks.push({
            id: item.track.id,
            track_name: item.track.name,
            album_name: item.track.album.name,
            img: item.track.album.images[0].url,
            duration: getMinutesFromMiliseconds(item.track.duration_ms),
            artists,
          });
        }
      });
    }

    const playListFeatures = {
      name: data.name,
      total: data.tracks.total,
      spotify_url: data.external_urls.spotify,
      img: data.images[0].url,
      owner: data.owner.display_name,
      owner_url: data.owner.external_urls.spotify,
      description: data.description,
      followers: +data.followers.total,
    };

    return { playListFeatures, playlistTracks };
  }

  return null;
}
