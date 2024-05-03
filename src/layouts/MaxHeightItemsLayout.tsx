import { Outlet } from 'react-router-dom';

const MaxHeightItemsLayout = () => (
  <div className="flex h-screen w-full px-2 py-2 max-md:!pb-28 md:ml-24">
    <Outlet />
  </div>
);

export default MaxHeightItemsLayout;
