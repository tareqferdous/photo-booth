import { useEffect, useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import useAxios from "../../hooks/useAxios";
import { getDateDifference } from "../../utils/index.js";

const PostActions = ({ likes, postTime, postId }) => {
  const { auth } = useAuth();
  const { api } = useAxios();
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    const isLiked = likes.some((like) => like._id === auth?.user?._id);
    setLiked(isLiked);
  }, [likes, auth?.user?._id]);

  const handleLike = async () => {
    if (!auth?.user?._id) {
      return;
    }
    try {
      const response = await api.post(
        `${import.meta.env.VITE_SERVER_BASE_URL}/posts/${postId}/like`
      );

      if (response.status === 200) {
        setLiked(true);
      }
    } catch (error) {
      console.error(error);
      setLiked(false);
    }
  };

  return (
    <div className="p-3 border-b border-gray-200">
      <div className="flex justify-between mb-2">
        <div className="flex space-x-4">
          <button onClick={handleLike} className="like-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill={liked ? "red" : "none"}
              viewBox="0 0 24 24"
              stroke={liked ? "red" : "currentColor"}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </button>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
          </button>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Likes */}
      <div className="mb-1">
        <p className="text-sm font-semibold">{`${
          likes.length > 0
            ? likes.length + " Likes"
            : "Be the first to like this post"
        }`}</p>
      </div>

      {/* Post Time */}
      <div className="mb-2">
        <p className="text-xs text-gray-500">{getDateDifference(postTime)}</p>
      </div>
    </div>
  );
};

export default PostActions;
