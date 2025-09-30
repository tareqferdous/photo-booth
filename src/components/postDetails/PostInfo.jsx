import { useAuth } from "../../hooks/useAuth";
import PostActions from "./PostActions";
import PostComments from "./PostComments";
import PostDetailsHeader from "./PostDetailsHeader";
import { useState } from "react";
import useAxios from "../../hooks/useAxios";

const PostInfo = ({ caption, userInfo, comments, likes, postTime, postId }) => {
  const { auth } = useAuth();

  const [comment, setComment] = useState("");
  const [postComments, setPostComments] = useState(
    comments.length > 0 ? comments : []
  );
  const { api } = useAxios();

  const addComment = async (e) => {
    if (!auth?.user?._id) {
      return;
    }
    const keyCode = e.keyCode;

    if (keyCode === 13) {
      try {
        const response = await api.post(
          `${import.meta.env.VITE_SERVER_BASE_URL}/posts/${postId}/comment`,
          { text: comment }
        );

        if (response.status === 201) {
          setPostComments([...postComments, response?.data?.comment]);
          setComment("");
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  console.log("postComments", comments);

  return (
    <div className="w-full md:w-1/2 flex flex-col">
      {/* Post Header */}
      <PostDetailsHeader userInfo={userInfo} />

      <div className="p-3">
        <p className="text-sm ">{caption}</p>
      </div>

      {/* Comments Section */}
      <PostComments comments={postComments} />

      {/* Post Actions */}
      <PostActions likes={likes} postTime={postTime} postId={postId} />

      {/* Add Comment */}
      <div className="p-3 flex items-center">
        <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-300 mr-2">
          <img
            src={`${import.meta.env.VITE_BASE_URL}/${auth?.user?.avatar}`}
            alt={auth?.user?.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 flex items-center justify-between">
          <input
            type="text"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            onKeyDown={(e) => addComment(e)}
            placeholder="Add a comment..."
            className="text-sm w-full outline-none"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default PostInfo;
