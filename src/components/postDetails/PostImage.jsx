const PostImage = ({ image }) => {
  return (
    <div className="w-full md:w-1/2 bg-black flex items-center">
      <img
        src={`${import.meta.env.VITE_BASE_URL}/${image}`}
        alt="Post image"
        className="w-full post-image"
      />
    </div>
  );
};

export default PostImage;
