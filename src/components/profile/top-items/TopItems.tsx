import { Card } from '../../ui/card';
import { TopArtists } from './TopArtists';
import { TopTracks } from './TopTracks';

export function TopItems() {
  return (
    <Card className="grid grid-cols-2 gap-4 ">
      <TopArtists />
      <TopTracks />
    </Card>
  );
}
