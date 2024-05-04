import { useQuery } from '@tanstack/react-query';
import { getAuthToken } from '../ui/auth';
import { fetchTrackAnalysis } from '../util/http-spotify';
import { getMinutesFromMiliseconds } from '../lib/time';
import { useTrackById } from './useTrackById';

function keyToChord(key: number) {
  const pitchClasses = [
    'C',
    'C♯/D♭',
    'D',
    'D♯/E♭',
    'E',
    'F',
    'F♯/G♭',
    'G',
    'G♯/A♭',
    'A',
    'A♯/B♭',
    'B',
  ];

  if (key === -1) {
    return null;
  } else if (key >= 0 && key <= 11) {
    return pitchClasses[key];
  } else {
    return null;
  }
}

export function useTrackAnalysis(id: string) {
  const token = getAuthToken();
  if (!token) throw new Error('Missing token!');

  const { data } = useQuery({
    queryKey: ['artist', id],
    queryFn: ({ signal }) => fetchTrackAnalysis(token, id, signal),
  });

  const trackData = useTrackById(id);

  if (data && trackData) {
    const chartData = [
      {
        value: data.acousticness,
        name: 'acousticness',
      },
      {
        value: data.danceability,
        name: 'dancebility',
      },
      {
        value: data.energy,
        name: 'energy',
      },
      {
        value: data.instrumentalness,
        name: 'instrumentalness',
      },
      {
        value: data.liveness,
        name: 'liveness',
      },
      {
        value: data.valence,
        name: 'positiveness',
      },
    ];

    const tableData = {
      duration: getMinutesFromMiliseconds(data.duration_ms),
      key_note: keyToChord(data.key),
      tempo: data.tempo.toFixed() + ' BPM',
      time_signature: data.time_signature,
      modality: data.mode === 1 ? 'Major' : 'Minor',
      popularity: '% ' + trackData.popularity,
    };

    return { chartData, tableData };
  }

  return null;
}
