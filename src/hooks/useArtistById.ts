import { useQuery } from '@tanstack/react-query';
import { fetchArtistById } from '../util/http-spotify';

export function useArtistById(id: string) {
  const { data } = useQuery({
    queryKey: ['artist', id],
    queryFn: ({ signal }) => fetchArtistById(id, signal),
  });

  if (data) {
    const followers = data.followers.total
      .toString()
      .split('')
      .reverse()
      .map((digit, index) =>
        index !== 0 && index % 3 === 0 ? digit + ',' : digit
      )
      .reverse();
    return {
      name: data.name,
      genres: data.genres,
      spotify_url: data.external_urls.spotify,
      img: data.images[0].url,
      followers,
      popularity: data.popularity,
    };
  }

  return null;
}
