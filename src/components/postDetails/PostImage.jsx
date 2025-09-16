import Post1 from "../../assets/articles/post-1.jpg";

const PostImage = () => {
  return (
    <div className="w-full md:w-1/2 bg-black flex items-center">
      <img src={Post1} alt="Post image" className="w-full post-image" />
    </div>
  );
};

export default PostImage;
