import { useQuery } from '@tanstack/react-query';
import { getAuthToken } from '../ui/auth';
import { fetchTrackById } from '../util/http-spotify';

export function useTrackById(id: string) {
  const token = getAuthToken();
  if (!token) throw new Error('Missing token!');

  const { data } = useQuery({
    queryKey: ['track', token, id],
    queryFn: ({ signal }) => fetchTrackById(token, id, signal),
  });

  if (data) {
    const artists: { [key: string]: string } = {};
    data.artists.forEach(artist => {
      const name = artist.name;
      const id = artist.id;
      artists[name] = id;
    });
    return {
      track_name: data.name,
      album_name: data.album.name,
      artists,
      spotify_url: data.external_urls.spotify,
      popularity: data.popularity,
      preview_url: data.preview_url,
      release_year: data.album.release_date.slice(0, 4),
      img: data.album.images[0].url,
      album_id: data.album.id,
    };
  }

  return null;
}
