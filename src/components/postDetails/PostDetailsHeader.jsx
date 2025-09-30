import { getDateDifference } from "../../utils/index.js";

const PostDetailsHeader = ({ userInfo }) => {
  return (
    <div className="flex items-center justify-between p-3 border-b border-gray-200">
      <a href="./profile.html">
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full overflow-hidden">
            <div className="w-full h-full rounded-full overflow-hidden bg-white">
              <img
                src={`${import.meta.env.VITE_BASE_URL}/${userInfo?.avatar}`}
                alt="User avatar"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
          <div className="ml-2">
            <div className="flex items-center">
              <span className="font-semibold text-sm">{userInfo?.name}</span>
            </div>
            <div className="flex items-center">
              <span className="text-[10px] text-gray-600">
                {getDateDifference(userInfo?.createdAt)}
              </span>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default PostDetailsHeader;
