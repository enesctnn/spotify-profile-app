import { useParams } from 'react-router-dom';
import {
  Legend,
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';
import { useSeveralTrackAnalysis } from '../../hooks/useSeveralTrackAnalysis';
import { LoadingSkeleton } from '../ui/loading-skeleton';

export function PlaylistAnalysis() {
  const { id } = useParams();
  if (!id) throw new Error('');

  const data = useSeveralTrackAnalysis(id);

  return (
    <>
      {!data && <LoadingSkeleton />}
      {data && (
        <ResponsiveContainer width="100%" height={300}>
          <RadarChart
            data={data}
            className="text-xs font-bold capitalize text-spotify-gray"
            margin={{ top: 35, right: 5, bottom: 0, left: 5 }}
          >
            <PolarGrid opacity={0.4} strokeWidth={0.3} />
            <PolarAngleAxis dataKey="name" />
            <Radar
              dataKey="value"
              stroke="#1E71D6"
              fill="#1E71D6"
              fillOpacity={0.6}
            />
            <Tooltip />
            <Legend />
          </RadarChart>
        </ResponsiveContainer>
      )}
    </>
  );
}
