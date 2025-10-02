import { Link } from "react-router-dom";
import { useProfileImage } from "../../hooks/useProfileImage";
import { getDateDifference } from "../../utils";

const PostHeader = ({ avatarUrl, createdAt, userName, userId }) => {
  const { setIsProfileImageUpdated } = useProfileImage();
  return (
    <div className="flex items-center p-3">
      <Link
        to={`/profile/${userId}`}
        onClick={() => setIsProfileImageUpdated(false)}
        className="w-8 h-8 rounded-full overflow-hidden flex items-center justify-center text-white text-xs"
      >
        <img src={avatarUrl} className="w-full h-full object-cover" />
      </Link>
      <div className="ml-2">
        <Link
          to={`/profile/${userId}`}
          onClick={() => setIsProfileImageUpdated(false)}
          className="font-semibold text-sm"
        >
          {userName}
        </Link>
        <span className="text-gray-500 text-xs">
          {" "}
          • {getDateDifference(createdAt)}
        </span>
      </div>
    </div>
  );
};

export default PostHeader;
