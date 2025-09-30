import { Link } from "react-router-dom";

const CommentsCount = ({ allComments, postId }) => {
  return (
    <div className="px-3 mt-1">
      <Link to={`/posts/${postId}`} className="text-gray-500 text-sm">
        View all {allComments} comments
      </Link>
    </div>
  );
};

export default CommentsCount;
