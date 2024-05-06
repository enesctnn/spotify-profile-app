import { TopListItem } from '../shared/TopListItem';

export const RecommendedList = (
  {playlistTracks}: {playlistTracks:{
    id: string;
    track_name: string;
    album_name: string;
    img: string;
    duration: string;
    artists: {
      [key: string]: string;
    };
  }[]}
) => (
  <ul>
    {playlistTracks.map(item => (
      <TopListItem key={item.id} {...item} item_type={'tracks'} />
    ))}
  </ul>
);
