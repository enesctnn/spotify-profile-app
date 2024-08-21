import { useQuery } from '@tanstack/react-query';
import { getMinutesFromMiliseconds } from '../lib/time';
import { fetchTrackAnalysis } from '../util/http-spotify';
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

  if (key >= 0 && key <= 11) {
    return pitchClasses[key];
  } else {
    return null;
  }
}

export function useTrackAnalysis(id: string) {
  const { data } = useQuery({
    queryKey: ['artist', id],
    queryFn: ({ signal }) => fetchTrackAnalysis(id, signal),
  });

  const trackData = useTrackById(id);

  if (!!data && trackData) {
    const chartNames = {
      energy: 'Energy',
      liveness: 'Liveness',
      danceability: 'Danceability',
      instrumentalness: 'Instrumental',
      acousticness: 'Acoustic',
      valence: 'Positiveness',
    };

    const chartData = Object.keys(chartNames).map(key => ({
      name: chartNames[key as keyof typeof chartNames],
      value: +data[key as keyof typeof data],
    }));

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
