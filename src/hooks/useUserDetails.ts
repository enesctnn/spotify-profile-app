import { useQuery } from '@tanstack/react-query';
import { fetchUserProfileDetails } from '../util/http-spotify';

export function useUserDetails() {
  const { data } = useQuery({
    queryKey: ['user-details'],
    queryFn: ({ signal }) => fetchUserProfileDetails(signal),
  });

  if (data)
    return {
      user_id: data.id,
      user_name: data.display_name,
      img: data.images[data.images.length - 1]?.url,
      spotify_url: data.external_urls.spotify,
      followers: +data.followers.total,
    };

  return null;
}
