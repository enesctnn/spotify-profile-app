import { NAV_ITEMS } from '../../config/navigation';
import { NavItem } from './NavItem';

export const NavItems = () => (
  <ul className="flex items-stretch justify-center max-md:h-full max-md:w-full md:flex-col">
    {NAV_ITEMS.map(item => (
      <NavItem
        key={item.path}
        path={item.path}
        title={item.title}
        icon={item.icon}
      />
    ))}
  </ul>
);
