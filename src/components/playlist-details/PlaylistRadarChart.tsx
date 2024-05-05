import {
  Legend,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  Tooltip,
} from 'recharts';

export const PlaylistRadarChart = ({
  chartData,
}: {
  chartData: { name: string; value: number }[];
}) => (
  <RadarChart
    width={300}
    height={300}
    data={chartData}
    className="group text-xs font-bold text-spotify-gray"
    margin={{ top: 35, right: 5, bottom: 0, left: 5 }}
  >
    <PolarRadiusAxis
      className="text-[8px] opacity-0 transition-opacity duration-500 group-hover:opacity-70"
      angle={90}
      stroke="#b3b3b3"
      domain={[0, 1]}
    />
    <PolarGrid opacity={0.4} strokeWidth={0.3} />
    <PolarAngleAxis dataKey="name" />
    <Radar dataKey="value" stroke="#1E71D6" fill="#1E71D6" fillOpacity={0.6} />
    <Tooltip />
    <Legend />
  </RadarChart>
);
