import { ProfileArticle } from '../components/profile/ProfileArticle';
import { TopItems } from '../components/profile/top-items/TopItems';

function UserProfilePage() {
  return (
    <div className="h-full w-full space-y-2 px-2 py-2 md:ml-24">
      <ProfileArticle />
      <TopItems />
    </div>
  );
}

export default UserProfilePage;
