import { Link } from "react-router-dom";
import Avatar from "../../assets/avatar.jpg";
const UserInfo = () => {
  return (
    <Link to="/profile">
      <div className="flex items-center">
        <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-300">
          <img
            src={Avatar}
            alt="User avatar"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="ml-2">
          <span className="font-semibold text-sm">Saad Hasan</span>
          <p className="text-xs text-gray-500 leading-tight">@saadh393</p>
        </div>
      </div>
    </Link>
  );
};

export default UserInfo;
