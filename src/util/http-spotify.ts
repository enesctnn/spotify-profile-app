import { AxiosError } from 'axios';
import {
  SpotifyArtistResponse,
  SpotifyProfileResponse,
  SpotifyRecentlyPlayedResponse,
  SpotifyTopArtistsResponse,
  SpotifyTopTracksResponse,
  SpotifyTrackResponse,
  SpotifyUserPlaylistResponse,
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
): Promise<SpotifyUserPlaylistResponse> {
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

export async function fetchUserRecentlyPlayed(
  authorizationToken: string,
  signal?: AbortSignal,
  limit = 50
): Promise<SpotifyRecentlyPlayedResponse> {
  try {
    const res = await spotifyAxios.get(
      `me/player/recently-played?limit=${limit}`,
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
    throw new Error(
      'Something went wrong while fetching user recently played!'
    );
  }
}

export async function fetchArtistById(
  authorizationToken: string,
  id: string,
  signal?: AbortSignal
): Promise<SpotifyArtistResponse> {
  try {
    const res = await spotifyAxios.get(`artists/${id}`, {
      headers: {
        Authorization: `Bearer ${authorizationToken}`,
      },
      signal,
    });
    return res.data;
  } catch (error) {
    if (error instanceof AxiosError) throw new Error(error.message);
    throw new Error('Something went wrong while fetching artist!');
  }
}

export async function fetchTrackById(
  authorizationToken: string,
  id: string,
  signal?: AbortSignal
): Promise<SpotifyTrackResponse> {
  try {
    const res = await spotifyAxios.get(`tracks/${id}`, {
      headers: {
        Authorization: `Bearer ${authorizationToken}`,
      },
      signal,
    });
    return res.data;
  } catch (error) {
    if (error instanceof AxiosError) throw new Error(error.message);
    throw new Error('Something went wrong while fetching artist!');
  }
}

export async function fetchPlaylistById(
  authorizationToken: string,
  id: string,
  signal?: AbortSignal
): Promise<SpotifyTrackResponse> {
  try {
    const res = await spotifyAxios.get(`playlists/${id}`, {
      headers: {
        Authorization: `Bearer ${authorizationToken}`,
      },
      signal,
    });
    return res.data;
  } catch (error) {
    if (error instanceof AxiosError) throw new Error(error.message);
    throw new Error('Something went wrong while fetching artist!');
  }
}