import { ProfileArticle } from '../components/profile/ProfileArticle';
import { TopItemsAllTime } from '../components/profile/top-items/TopItemsAllTime';

const UserProfilePage = () => (
  <div className="h-full w-full space-y-2 px-2 py-2 max-md:mb-24 md:ml-24">
    <ProfileArticle />
    <TopItemsAllTime />
  </div>
);

export default UserProfilePage;
