import { Link } from "react-router-dom";
const ProfilePost = ({ post }) => {
  return (
    <Link to={`/posts/${post._id}`}>
      <div className="relative">
        <img
          src={`${import.meta.env.VITE_BASE_URL}/${post?.image}`}
          alt="Post"
          className="w-full grid-image"
        />
      </div>
    </Link>
  );
};

export default ProfilePost;
