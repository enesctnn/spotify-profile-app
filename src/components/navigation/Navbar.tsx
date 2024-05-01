import { FaGithub, FaHistory, FaRegUserCircle } from 'react-icons/fa';
import { NavItem } from './NavItem';

import { GiMusicalNotes } from 'react-icons/gi';
import { PiMicrophoneStageLight } from 'react-icons/pi';
import { REDIRECT_URI } from '../../ui/redirect';
import spotifyIcon from '/spotify.svg';

export function Navbar() {
  return (
    <nav className="fixed flex items-center justify-between bg-spotify-gray max-md:bottom-0 max-md:h-max max-md:w-full md:left-0 md:h-full md:w-max md:flex-col md:py-6">
      <header className="hidden md:block">
        <a href={REDIRECT_URI}>
          <img src={spotifyIcon} alt="spotify icon" className="w-16 " />
        </a>
      </header>
      <ul className="flex items-stretch justify-center max-md:h-full max-md:w-full md:flex-col">
        <NavItem icon={FaRegUserCircle} title="Profile" />
        <NavItem icon={PiMicrophoneStageLight} title="Top Artists" />
        <NavItem icon={GiMusicalNotes} title="Top Tracks" />
        <NavItem icon={FaHistory} title="Recent" />
        <NavItem icon={PiMicrophoneStageLight} title="Playlists" />
      </ul>
      <a
        href="https://github.com/enesctnn/spotify-profile-app"
        className="hidden h-max w-max md:block"
        target="_blank"
      >
        <FaGithub size={40} />
      </a>
    </nav>
  );
}
