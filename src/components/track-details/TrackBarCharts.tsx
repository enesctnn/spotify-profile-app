import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

export const TrackBarCharts = ({
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
      <YAxis stroke="#8884d8" tickCount={6} domain={[0, 1]} />
      <CartesianGrid fillOpacity={0.02} stroke="white" strokeWidth="0.1px" />
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
