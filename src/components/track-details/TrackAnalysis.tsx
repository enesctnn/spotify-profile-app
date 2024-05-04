import { useParams } from 'react-router-dom';
import { useTrackAnalysis } from '../../hooks/useTrackAnalysis';
import { TrackCharts } from './TrackCharts';
import { TrackFeatures } from './TrackFeatures';

export function TrackAnalysis() {
  const { id } = useParams();
  if (!id) throw new Error('Missing id!');

  const trackAnalysisData = useTrackAnalysis(id);

  return (
    <>
      {trackAnalysisData && (
        <>
          <TrackFeatures {...trackAnalysisData.tableData} />
          <TrackCharts chartData={trackAnalysisData.chartData} />
        </>
      )}
    </>
  );
}
