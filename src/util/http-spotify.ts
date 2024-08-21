import { AxiosError } from 'axios';
import {
  CreatePlaylistResponse,
  SpotifyArtistResponse,
  SpotifyPlaylistResponseById,
  SpotifyProfileResponse,
  SpotifyRecentlyPlayedResponse,
  SpotifyTopArtistsResponse,
  SpotifyTopTracksResponse,
  SpotifyTrackAnalysisResponse,
  SpotifyTrackResponse,
  SpotifyUserPlaylistResponse,
  TrackRecommendationResponse,
} from '../@types/spotify.res';

import spotifyAxios from './spotify-axios';

export async function fetchUserProfileDetails(
  signal?: AbortSignal
): Promise<SpotifyProfileResponse> {
  try {
    const res = await spotifyAxios.get('me', {
      signal,
    });
    return res.data;
  } catch (error) {
    if (error instanceof AxiosError) throw new Error(error.message);
    throw new Error('Something went wrong while fetching user details!');
  }
}

export async function fetchUserTopArtists(
  time_range: 'short_term' | 'medium_term' | 'long_term',
  signal?: AbortSignal,
  limit = 50
): Promise<SpotifyTopArtistsResponse> {
  try {
    const res = await spotifyAxios.get(
      `me/top/artists?limit=${limit}&time_range=${time_range}`,
      {
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
  time_range: 'short_term' | 'medium_term' | 'long_term',
  signal?: AbortSignal,
  limit = 50
): Promise<SpotifyTopTracksResponse> {
  try {
    const res = await spotifyAxios.get(
      `me/top/tracks?limit=${limit}&time_range=${time_range}`,
      {
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
  signal?: AbortSignal,
  limit = 50
): Promise<SpotifyUserPlaylistResponse> {
  try {
    const res = await spotifyAxios.get(`me/playlists?limit=${limit}`, {
      signal,
    });
    return res.data;
  } catch (error) {
    if (error instanceof AxiosError) throw new Error(error.message);
    throw new Error('Something went wrong while fetching user playlists!');
  }
}

export async function fetchUserRecentlyPlayed(
  signal?: AbortSignal,
  limit = 50
): Promise<SpotifyRecentlyPlayedResponse> {
  try {
    const res = await spotifyAxios.get(
      `me/player/recently-played?limit=${limit}`,
      {
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
  id: string,
  signal?: AbortSignal
): Promise<SpotifyArtistResponse> {
  try {
    const res = await spotifyAxios.get(`artists/${id}`, {
      signal,
    });
    return res.data;
  } catch (error) {
    if (error instanceof AxiosError) throw new Error(error.message);
    throw new Error('Something went wrong while fetching artist!');
  }
}

export async function fetchTrackById(
  id: string,
  signal?: AbortSignal
): Promise<SpotifyTrackResponse> {
  try {
    const res = await spotifyAxios.get(`tracks/${id}`, {
      signal,
    });
    return res.data;
  } catch (error) {
    if (error instanceof AxiosError) throw new Error(error.message);
    throw new Error('Something went wrong while fetching track!');
  }
}

export async function fetchPlaylistById(
  id: string,
  signal?: AbortSignal
): Promise<SpotifyPlaylistResponseById> {
  try {
    const res = await spotifyAxios.get(`playlists/${id}`, {
      signal,
    });
    return res.data;
  } catch (error) {
    if (error instanceof AxiosError) throw new Error(error.message);
    throw new Error('Something went wrong while fetching playlist!');
  }
}

export async function fetchTrackAnalysis(
  id: string,
  signal?: AbortSignal
): Promise<SpotifyTrackAnalysisResponse> {
  try {
    const res = await spotifyAxios.get(`audio-features/${id}`, {
      signal,
    });
    return res.data;
  } catch (error) {
    if (error instanceof AxiosError) throw new Error(error.message);
    throw new Error('Something went wrong while fetching track analysis!');
  }
}

export async function fetchSeveralTrackAnalysis(
  ids: string[],
  signal?: AbortSignal
): Promise<{ audio_features: SpotifyTrackAnalysisResponse[] }> {
  try {
    const res = await spotifyAxios.get(`audio-features?ids=${ids.join(',')}`, {
      signal,
    });
    return res.data;
  } catch (error) {
    if (error instanceof AxiosError) throw new Error(error.message);
    throw new Error(
      'Something went wrong while fetching several track analysis!'
    );
  }
}

export async function fetchTrackRecommendations(
  ids: string[],
  signal?: AbortSignal
): Promise<TrackRecommendationResponse> {
  try {
    const res = await spotifyAxios.get(
      `recommendations?seed_tracks=${ids.slice(0, 5).join(',')}`,
      {
        signal,
      }
    );
    return res.data;
  } catch (error) {
    if (error instanceof AxiosError) throw new Error(error.message);
    throw new Error(
      'Something went wrong while fetching several track recommendations!'
    );
  }
}

export async function createPlaylist(
  user_id: string,
  name: string,
  description: string,
  signal?: AbortSignal
): Promise<CreatePlaylistResponse> {
  try {
    const res = await spotifyAxios.post(
      `users/${user_id}/playlists`,
      {
        name: JSON.stringify(name),
        description: JSON.stringify(description),
      },
      {
        signal,
      }
    );
    return res.data;
  } catch (error) {
    if (error instanceof AxiosError) throw new Error(error.message);
    throw new Error('Something went wrong while creating playlist!');
  }
}

export async function addItemsToPlaylist(
  playlist_id: string,
  track_uris: string[],
  signal?: AbortSignal
): Promise<{ snapshot_id: string }> {
  try {
    const res = await spotifyAxios.post(
      `playlists/${playlist_id}/tracks?uris=${track_uris.join(',')}`,
      {},
      {
        signal,
      }
    );
    return res.data;
  } catch (error) {
    if (error instanceof AxiosError) throw new Error(error.message);
    throw new Error('Something went wrong while adding tracks to playlist!');
  }
}
