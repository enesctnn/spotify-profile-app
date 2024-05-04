import { Card } from '../ui/card';
import { TrackAnalysis } from "./TrackAnalysis";
import { TrackDetailsHeader } from './TrackDetailsHeader';


export const TrackDetails = () => (
  <Card maxHeightScreen className="space-y-10">
    <TrackDetailsHeader />
    <TrackAnalysis />
  </Card>
);
