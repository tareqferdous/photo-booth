import ProfileHeader from "../components/profile/ProfileHeader";
import ProfilePost from "../components/profile/ProfilePost";

const ProfilePage = () => {
  return (
    <div className="main-container">
      <div className="profile-container">
        {/* Profile Header  */}
        <ProfileHeader />

        <section>
          <h3 className="font-semibold text-lg mb-4">Posts</h3>
          {/* Photo Grid */}
          <div className="grid grid-cols-3 gap-1">
            {/* Grid Item 1 */}
            <ProfilePost />
            <ProfilePost />
            <ProfilePost />
            <ProfilePost />
            <ProfilePost />
            <ProfilePost />
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProfilePage;
