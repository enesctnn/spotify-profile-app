import { useQuery } from '@tanstack/react-query';
import { getAuthToken } from '../ui/auth';
import { fetchPlaylistById } from '../util/http-spotify';

export function useArtistById(id: string) {
  const token = getAuthToken();
  if (!token) throw new Error('Missing token!');

  const { data } = useQuery({
    queryKey: ['artist', token, id],
    queryFn: ({ signal }) => fetchPlaylistById(token, id, signal),
  });

  if (data) 
    return {
      name: data.name,
      total: data.album.total_tracks,
      spotify_url: data.external_urls.spotify,
      img: data.album.images[0].url,
    };
  

  return null;
}
