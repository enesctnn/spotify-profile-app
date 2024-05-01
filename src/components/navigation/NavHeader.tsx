import { REDIRECT_URI } from '../../ui/redirect';
import spotifyIcon from '/spotify.svg';

export const NavHeader = () => (
  <header className="hidden md:block">
    <a href={REDIRECT_URI} title="Spotify Profile">
      <img src={spotifyIcon} alt="spotify icon" className="w-16 " />
    </a>
  </header>
);
