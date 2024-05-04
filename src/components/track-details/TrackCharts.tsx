import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

export const TrackCharts = ({
  chartData,
}: {
  chartData: { name: string; value: number }[];
}) => (
  <ResponsiveContainer width="100%" height={700}>
    <BarChart
      data={chartData}
      className="text-sm font-bold capitalize text-spotify-gray-200"
      layout="horizontal"
    >
      <XAxis
        dataKey="name"
        stroke="#8884d8"
        angle={-55}
        height={125}
        tickMargin={55}
      />
      <YAxis stroke="#8884d8" />
      <CartesianGrid stroke="#1db954" strokeWidth="0.1px" color="#1db954" />
      <Bar
        dataKey="value"
        stroke="#1db954"
        fill="#1db954"
        barSize="8%"
        strokeWidth={2}
        fillOpacity={0.35}
      />
      <Tooltip
        cursor={{ stroke: '#1db954', strokeWidth: 0.3, fill: 'transparent' }}
      />
    </BarChart>
  </ResponsiveContainer>
);
