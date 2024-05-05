import { useQuery } from '@tanstack/react-query';
import { getHoursFromMiliseconds } from '../lib/time';
import { getAuthToken } from '../ui/auth';
import { fetchSeveralTrackAnalysis } from '../util/http-spotify';
import { usePlaylistTrackIds } from './usePlaylistTrackIds';

export function useSeveralTrackAnalysis(playlist_id: string) {
  const token = getAuthToken();
  if (!token) throw new Error('Missing token!');

  const playlistTrackIds = usePlaylistTrackIds(playlist_id);

  const { data } = useQuery({
    queryKey: [
      'several-track-analysis',
      token,
      playlist_id,
      playlistTrackIds?.ids,
    ],
    queryFn: ({ signal }) =>
      fetchSeveralTrackAnalysis(token, playlistTrackIds!.ids, signal),
    enabled: !!playlistTrackIds?.ids && playlistTrackIds?.ids.length > 0,
  });

  const trackAnalysisObject: { [key: string]: number } = {};

  if (data) {
    const chartNames = {
      instrumentalness: 'Instrumental',
      energy: 'Energy',
      acousticness: 'Acoustic',
      danceability: 'Danceable',
      liveness: 'Live',
      valence: 'Positive',
    };
    let total_duration: number = 0;

    data.audio_features.forEach(analysis => {
      Object.keys(chartNames).forEach(
        element =>
          (trackAnalysisObject[element] =
            (trackAnalysisObject[element] || 0) +
            +analysis[element as keyof typeof analysis])
      );
      total_duration += analysis.duration_ms;
    });

    const chartData: { value: number; name: string }[] = [];

    Object.keys(trackAnalysisObject).forEach(key =>
      chartData.push({
        name: chartNames[key as keyof typeof chartNames],
        value: +(trackAnalysisObject[key] / data.audio_features.length).toFixed(
          2
        ),
      })
    );

    return {
      chartData,
      total_duration: getHoursFromMiliseconds(total_duration),
    };
  }

  return null;
}
