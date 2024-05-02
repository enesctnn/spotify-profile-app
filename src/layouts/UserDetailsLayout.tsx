import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/navigation/Navbar';

const UserDetailsLayout = () => (
  <>
    <Navbar />
    <Outlet />
  </>
);

export default UserDetailsLayout;
