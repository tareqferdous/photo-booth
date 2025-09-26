import { useState } from "react";
import LikedUsersModal from "../../modals/LikedUsersModal";

const PostLikes = ({ likesCount, likes }) => {
  const [showLikes, setShowLikes] = useState(false);
  return (
    <>
      <div className="px-3">
        <div className="flex items-center">
          <div className="h-6 flex -space-x-2">
            {Array.isArray(likes) && likes.length > 0 ? (
              likes
                .slice(0, 3)
                .map((like) => (
                  <img
                    key={like._id}
                    src={`${import.meta.env.VITE_BASE_URL}/${like.avatar}`}
                    alt={like.name}
                    className="w-6 h-6 rounded-full"
                  />
                ))
            ) : (
              <></>
            )}
          </div>
          <p className="text-sm ml-2">
            <span
              onClick={() => setShowLikes(!showLikes)}
              className="font-semibold cursor-pointer"
            >
              {likesCount} likes
            </span>
          </p>
        </div>
      </div>

      {showLikes && (
        <LikedUsersModal likes={likes} setShowLikes={setShowLikes} />
      )}
    </>
  );
};

export default PostLikes;
