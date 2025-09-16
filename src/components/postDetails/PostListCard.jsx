import { Link } from "react-router-dom";
import Post2 from "../../assets/articles/post-2.jpg";

const PostListCard = () => {
  return (
    <Link to="/post-details">
      <div className="relative">
        <img src={Post2} alt="Grid image" className="w-full grid-image" />
      </div>
    </Link>
  );
};

export default PostListCard;
