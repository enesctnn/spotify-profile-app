import { useQuery } from '@tanstack/react-query';
import { getAuthToken } from '../ui/auth';
import { fetchSeveralTrackAnalysis } from '../util/http-spotify';
import { usePlaylistTrackIds } from './usePlaylistTrackIds';

export function useSeveralTrackAnalysis(playlist_id: string) {
  const token = getAuthToken();
  if (!token) throw new Error('Missing token!');

  const playlistTrackIds = usePlaylistTrackIds(playlist_id);

  const { data } = useQuery({
    queryKey: ['several-track-analysis', token, playlist_id, playlistTrackIds],
    queryFn: ({ signal }) =>
      fetchSeveralTrackAnalysis(token, playlistTrackIds!, signal),
    enabled: !!playlistTrackIds && playlistTrackIds.length > 0,
  });

  const trackAnalysisObject: { [key: string]: number } = {};

  if (data) {
    data.audio_features.forEach(analysis =>
      [
        'acousticness',
        'danceability',
        'energy',
        'instrumentalness',
        'liveness',
        'valence',
      ].forEach(
        element =>
          (trackAnalysisObject[element] =
            (trackAnalysisObject[element] || 0) +
            +analysis[element as keyof typeof analysis])
      )
    );

    const chartData: { value: number; name: string }[] = [];

    Object.keys(trackAnalysisObject).forEach(key =>
      chartData.push({
        name: key,
        value: +(trackAnalysisObject[key] / data.audio_features.length).toFixed(
          2
        ),
      })
    );

    return chartData;
  }

  return null;
}
