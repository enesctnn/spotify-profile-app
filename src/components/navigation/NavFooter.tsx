import { FaGithub } from 'react-icons/fa';

export const NavFooter = () => (
  <footer>
    <a
      href="https://github.com/enesctnn/spotify-profile-app"
      className="hidden h-max w-max transition-colors hover:text-spotify-green md:block"
      target="_blank"
      title="Github"
    >
      <FaGithub size={40} />
    </a>
  </footer>
);
