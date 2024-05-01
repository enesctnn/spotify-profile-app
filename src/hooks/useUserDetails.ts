import { useQuery } from '@tanstack/react-query';
import { useRouteLoaderData } from 'react-router-dom';
import { fetchUserProfileDetails } from '../util/http-spotify';

export function useUserDetails() {
  const token = useRouteLoaderData('user-details-root') as string;

  const { data } = useQuery({
    queryKey: ['user-details', token],
    queryFn: ({ signal }) => fetchUserProfileDetails(token!, signal),
    enabled: !!token,
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
