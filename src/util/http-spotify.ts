import { AxiosError } from 'axios';
import {
  SpotifyPlaylistResponse,
  SpotifyProfileResponse,
  SpotifyTopArtistsResponse,
  SpotifyTopTracksResponse
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

export async function fetchUserTopArtists(
  authorizationToken: string,
  time_range: 'short_term' | 'medium_term' | 'long_term',
  signal?: AbortSignal,
  limit = 50
): Promise<SpotifyTopArtistsResponse> {
  try {
    const res = await spotifyAxios.get(
      `me/top/artists?limit=${limit}&time_range=${time_range}`,
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
    throw new Error('Something went wrong while fetching user top artists!');
  }
}

export async function fetchUserTopTracks(
  authorizationToken: string,
  time_range: 'short_term' | 'medium_term' | 'long_term',
  signal?: AbortSignal,
  limit = 50
): Promise<SpotifyTopTracksResponse> {
  try {
    const res = await spotifyAxios.get(
      `me/top/tracks?limit=${limit}&time_range=${time_range}`,
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
    throw new Error('Something went wrong while fetching user top tracks!');
  }
}

export async function fetchUserPlaylists(
  authorizationToken: string,
  signal?: AbortSignal,
  limit = 50
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
