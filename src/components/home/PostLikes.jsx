import User1 from "../../assets/users/user-1.png";
import User2 from "../../assets/users/user-2.png";
import { default as User3 } from "../../assets/users/user-3.png";

const PostLikes = () => {
  return (
    <div className="px-3">
      <div className="flex items-center">
        <div className="h-6 flex -space-x-2">
          <img src={User1} alt="User avatar" className="w-6 h-6 rounded-full" />
          <img src={User2} alt="User avatar" className="w-6 h-6 rounded-full" />
          <img src={User3} alt="User avatar" className="w-6 h-6 rounded-full" />
        </div>
        <p className="text-sm ml-2">
          <span className="font-semibold">126 likes</span>
        </p>
      </div>
    </div>
  );
};

export default PostLikes;
