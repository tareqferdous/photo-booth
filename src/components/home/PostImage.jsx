import { Link } from "react-router-dom";

const PostImage = ({ postImageUrl }) => {
  return (
    <div className="relative">
      <Link to="/post-details">
        <img
          src={`${import.meta.env.VITE_BASE_URL}/${postImageUrl}`}
          alt="Post image"
          className="w-full object-cover max-h-[1000px]"
        />
      </Link>
    </div>
  );
};

export default PostImage;
