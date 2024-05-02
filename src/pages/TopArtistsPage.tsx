import { useState } from 'react';
import { TopArtistsList } from '../components/top-items/top-artists/TopArtistsList';
import { TopItemHeader } from '../components/top-items/TopItemHeader';
import { Card } from '../components/ui/card';

function TopArtistsPage() {
  const [timeRange, setTimeRange] = useState<
    'short_term' | 'medium_term' | 'long_term'
  >('long_term');

  return (
    <Card className="space-y-10">
      <TopItemHeader
        title="Top Artists"
        selectedRange={timeRange}
        onClick={setTimeRange}
      />
      <TopArtistsList timeRange={timeRange} />
    </Card>
  );
}

export default TopArtistsPage;
