import { IconType } from 'react-icons';

import { FaHistory, FaRegUserCircle } from 'react-icons/fa';
import { GiMusicalNotes } from 'react-icons/gi';
import { PiMicrophoneStageLight } from 'react-icons/pi';


export const NAV_ITEMS: { path: string; title: string; icon: IconType }[] = [
  {
    path: '/profile',
    title: 'Profile',
    icon: FaRegUserCircle,
  },
  {
    path: '/top-artists',
    title: 'Top Artists',
    icon: PiMicrophoneStageLight,
  },
  {
    path: '/top-tracks',
    title: 'Top Tracks',
    icon: GiMusicalNotes,
  },
  {
    path: '/recent',
    title: 'Recent',
    icon: FaHistory,
  },
  {
    path: '/playlists',
    title: 'Playlists',
    icon: PiMicrophoneStageLight,
  },
];
