import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/navigation/Navbar';

const UserDetailsRoot = () => (
  <>
    <Navbar />
    <div className="h-full w-full space-y-2 px-2 py-2 max-md:mb-24 md:ml-24">
      <Outlet />
    </div>
  </>
);

export default UserDetailsRoot;
