import { AxiosError } from 'axios';
import {
  SpotifyPlaylistResponse,
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

export async function fetchUserTopItems(
  authorizationToken: string,
  item_type: 'artists' | 'tracks',
  time_range: 'short_term' | 'medium_term' | 'long_term',
  signal?: AbortSignal,
  limit = 50,
): Promise<SpotifyTopItemsResponse> {
  try {
    const res = await spotifyAxios.get(
      `me/top/${item_type}?limit=${limit}&time_range=${time_range}`,
      {
        headers: {
          Authorization: `Bearer ${authorizationToken}`,
        },
        signal,
      }
    );
    return res.data;
  } catch (error) {
    if (error instanceof AxiosError) throw new Error(error.message);
    throw new Error('Something went wrong while fetching user top items!');
  }
}

export async function fetchUserPlaylists(
  authorizationToken: string,
  signal?: AbortSignal,
  limit = 50,
): Promise<SpotifyPlaylistResponse> {
  try {
    const res = await spotifyAxios.get(`me/playlists?limit=${limit}`, {
      headers: {
        Authorization: `Bearer ${authorizationToken}`,
      },
      signal,
    });
    return res.data;
  } catch (error) {
    if (error instanceof AxiosError) throw new Error(error.message);
    throw new Error('Something went wrong while fetching user playlists!');
  }
}
