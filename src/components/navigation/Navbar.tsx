import { NavFooter } from './NavFooter';
import { NavHeader } from './NavHeader';
import { NavItems } from './NavItems';

export function Navbar() {
  return (
    <nav className="fixed flex items-center justify-between bg-spotify-gray max-md:bottom-0 max-md:h-max max-md:w-full md:left-0 md:h-full md:w-24 md:flex-col md:py-6">
      <NavHeader />
      <NavItems />
      <NavFooter />
    </nav>
  );
}
