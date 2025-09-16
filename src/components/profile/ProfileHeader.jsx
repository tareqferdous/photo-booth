import User1 from "../../assets/users/user-1.png";
import ProfileInfo from "./ProfileInfo";

const ProfileHeader = () => {
  return (
    <div className="flex flex-col md:flex-row mb-10">
      {/* Profile Picture */}
      <div className="flex justify-items-end md:justify-start md:w-1/3 mb-6 md:mb-0 relative">
        <div className="w-24 h-24 md:w-36 md:h-36 rounded-full overflow-hidden border border-gray-300 mx-auto">
          <img
            src={User1}
            alt="Profile picture"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Profile Info */}
      <ProfileInfo />
    </div>
  );
};

export default ProfileHeader;
