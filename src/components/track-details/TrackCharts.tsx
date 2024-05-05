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
  <ResponsiveContainer className="-ml-6" width="100%" height={700}>
    <BarChart
      data={chartData}
      className="py-3 text-sm font-bold capitalize  text-spotify-gray-200"
      layout="horizontal"
    >
      <XAxis
        dataKey="name"
        stroke="#8884d8"
        angle={-55}
        height={125}
        tickMargin={55}
      />
      <YAxis stroke="#8884d8" tickCount={6} />
      <CartesianGrid
        fill="#8884d8"
        fillOpacity={0.02}
        stroke="#1E71D6"
        strokeWidth="0.1px"
        color="#1E71D6"
      />
      <Bar
        dataKey="value"
        stroke="#1E71D6"
        fill="#1E71D6"
        barSize="8%"
        strokeWidth={2}
        fillOpacity={0.35}
      />
      <Tooltip
        cursor={{ stroke: '#1E71D6', strokeWidth: 0.3, fill: 'transparent' }}
      />
    </BarChart>
  </ResponsiveContainer>
);
