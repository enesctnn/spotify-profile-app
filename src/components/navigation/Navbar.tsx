import { createPortal } from 'react-dom';
import { NavFooter } from './NavFooter';
import { NavHeader } from './NavHeader';
import { NavItems } from './NavItems';

export const Navbar = () =>
  createPortal(
    <>
      <NavHeader />
      <NavItems />
      <NavFooter />
    </>,
    document.getElementById('navroot')!
  );
