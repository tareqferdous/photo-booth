import { Link } from "react-router-dom";

const PostListCard = ({ post }) => {
  return (
    <Link to={`/posts/${post?._id}`}>
      <div className="relative">
        <img
          src={`${import.meta.env.VITE_BASE_URL}/${post?.image}`}
          alt={post?.caption}
          className="w-full grid-image"
        />
      </div>
    </Link>
  );
};

export default PostListCard;
