import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { useProfile } from "../../hooks/useProfile";
const UserInfo = () => {
  const { auth } = useAuth();
  const { state } = useProfile();

  const user = auth?.user ?? state?.user;

  return (
    <Link to="/profile">
      <div className="flex items-center">
        <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-300">
          <img
            src={`${import.meta.env.VITE_BASE_URL}/${user?.avatar}`}
            alt="User avatar"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="ml-2">
          <span className="font-semibold text-sm">{user?.name}</span>
          <p className="text-xs text-gray-500 leading-tight">{user?.email}</p>
        </div>
      </div>
    </Link>
  );
};

export default UserInfo;
