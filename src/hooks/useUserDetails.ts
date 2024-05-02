import { useQuery } from '@tanstack/react-query';
import { fetchUserProfileDetails } from '../util/http-spotify';
import { getAuthToken } from '../ui/auth';

export function useUserDetails() {
  const token = getAuthToken();
  if (!token) throw new Error('Missing token');

  const { data } = useQuery({
    queryKey: ['user-details', token],
    queryFn: ({ signal }) => fetchUserProfileDetails(token, signal),
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
