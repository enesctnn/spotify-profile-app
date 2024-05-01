import { useQuery } from '@tanstack/react-query';
import { fetchUserProfileDetails } from '../util/http-spotify';

export function useUserDetails(token: string) {
  const { data } = useQuery({
    queryKey: ['user-details', token],
    queryFn: ({ signal }) => fetchUserProfileDetails(token, signal),
  });

  return data;
}
