import { TopListItem } from '../shared/TopListItem';

type PlaylistTracksProps = {
  playlistTracks: {
    id: string;
    track_name: string;
    album_name: string;
    img: string;
    duration: string;
    artists: { [key: string]: string };
  }[];
};

export const PlaylistTracks = ({ playlistTracks }: PlaylistTracksProps) => (
  <ul
    className="w-full space-y-1 md:overflow-y-scroll md:rounded-md md:shadow-md md:shadow-black"
    id="card"
  >
    {playlistTracks.map(
      ({ album_name, artists, duration, id, img, track_name }) => (
        <TopListItem
          key={id}
          id={id}
          img={img}
          artists={artists}
          track_name={track_name}
          item_type="tracks"
          album_name={album_name}
          duration={duration}
        />
      )
    )}
  </ul>
);
