import { Outlet } from 'react-router-dom';

const MaxHeightItemsLayout = () => (
  <div className="h-screen w-full px-2 py-2 max-md:!pb-[104px] md:ml-24">
    <Outlet />
  </div>
);

export default MaxHeightItemsLayout;
