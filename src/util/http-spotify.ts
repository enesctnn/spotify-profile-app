import { AxiosError } from 'axios';
import {
  SpotifyProfileResponse,
  SpotifyTopItemsResponse,
} from '../@types/spotify.res';
import spotifyAxios from './spotify-axios';

export async function fetchUserProfileDetails(
  authorizationToken: string,
  signal?: AbortSignal
): Promise<SpotifyProfileResponse> {
  try {
    const res = await spotifyAxios.get('me', {
      headers: {
        Authorization: `Bearer ${authorizationToken}`,
      },
      signal,
    });
    return res.data;
  } catch (error) {
    if (error instanceof AxiosError) throw new Error(error.message);
    throw new Error('Something went wrong while fetching user details!');
  }
}

export async function fetchUsersTopItem(
  itemType: 'artists' | 'tracks',
  authorizationToken: string,
  signal?: AbortSignal
): Promise<SpotifyTopItemsResponse> {
  try {
    const res = await spotifyAxios.get(`me/top/${itemType}`, {
      headers: {
        Authorization: `Bearer ${authorizationToken}`,
      },
      signal,
    });
    return res.data;
  } catch (error) {
    if (error instanceof AxiosError) throw new Error(error.message);
    throw new Error('Something went wrong while fetching user details!');
  }
}
