import { IconType } from 'react-icons';

import { FaHistory, FaRegUserCircle } from 'react-icons/fa';
import { GiMusicalNotes } from 'react-icons/gi';
import { PiMicrophoneStageLight, PiPlaylistFill } from 'react-icons/pi';
import { baseUrl } from './baseUrl';

export const NAV_ITEMS: { path: string; title: string; icon: IconType }[] = [
  {
    path: `${baseUrl}profile`,
    title: 'Profile',
    icon: FaRegUserCircle,
  },
  {
    path: `${baseUrl}top-artists`,
    title: 'Top Artists',
    icon: PiMicrophoneStageLight,
  },
  {
    path: `${baseUrl}top-tracks`,
    title: 'Top Tracks',
    icon: GiMusicalNotes,
  },
  {
    path: `${baseUrl}recent`,
    title: 'Recent',
    icon: FaHistory,
  },
  {
    path: `${baseUrl}playlists`,
    title: 'Playlists',
    icon: PiPlaylistFill,
  },
];
