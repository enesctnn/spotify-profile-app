import { useState } from 'react';
import { TopItemHeader } from '../components/top-items/TopItemHeader';
import { Card } from '../components/ui/card';
import { TopTracksList } from '../components/top-items/top-tracks/TopTracksList';

function TopTracksPage() {
  const [timeRange, setTimeRange] = useState<
    'short_term' | 'medium_term' | 'long_term'
  >('long_term');

  return (
    <Card className="space-y-10" role="article" maxHeightScreen>
      <TopItemHeader
        onClick={setTimeRange}
        title="Top Tracks"
        selectedRange={timeRange}
      />
      <TopTracksList timeRange={timeRange} />
    </Card>
  );
}

export default TopTracksPage;
