import { RecentsList } from '../components/recent/RecentsList';
import { Card } from '../components/ui/card';

function RecentPage() {
  return (
    <Card className="w-full space-y-10" maxHeightScreen>
      <header>
        <h1 className="text-xl font-bold">Recently Played</h1>
      </header>
      <RecentsList />
    </Card>
  );
}

export default RecentPage;
