import { default as UserIcon } from "../../assets/users/user-3.png";

const PostHeader = () => {
  return (
    <div className="flex items-center p-3">
      <a
        href="./profile.html"
        className="w-8 h-8 rounded-full overflow-hidden flex items-center justify-center text-white text-xs"
      >
        <img src={UserIcon} className="w-full h-full object-cover" />
      </a>
      <div className="ml-2">
        <a href="./profile.html" className="font-semibold text-sm">
          Sumit Saha
        </a>
        <span className="text-gray-500 text-xs"> • 6m</span>
      </div>
    </div>
  );
};

export default PostHeader;
