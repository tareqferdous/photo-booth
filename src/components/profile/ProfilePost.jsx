import Post1 from "../../assets/articles/post-1.jpg";
const ProfilePost = () => {
  return (
    <a href="./post-details.html">
      <div className="relative">
        <img src={Post1} alt="Post" className="w-full grid-image" />
      </div>
    </a>
  );
};

export default ProfilePost;
