import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { useProfile } from "../../hooks/useProfile";
import { useProfileImage } from "../../hooks/useProfileImage";

const UserInfo = () => {
  const { auth } = useAuth();
  const { state } = useProfile();
  const { isProfileImageUpdated } = useProfileImage();
  const { setIsProfileImageUpdated } = useProfileImage();
  const user = isProfileImageUpdated ? state?.user : auth?.user;

  return (
    <Link
      to={`/profile/${user?._id}`}
      onClick={() => setIsProfileImageUpdated(false)}
      className="block"
    >
      <div className="flex items-center">
        <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-300">
          <img
            src={`${import.meta.env.VITE_BASE_URL}/${user?.avatar}`}
            alt="User avatar"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="ml-2">
          <span className="font-semibold text-sm">{auth?.user?.name}</span>
          <p className="text-xs text-gray-500 leading-tight">
            {auth?.user?.email}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default UserInfo;
