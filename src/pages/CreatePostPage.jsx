import CreatePostDetails from "../components/createPost/CreatePostDetails";
import CreatePostHeader from "../components/createPost/CreatePostHeader";
import ImagePreview from "../components/createPost/ImagePreview";

const CreatePostPage = () => {
  return (
    <>
      {/* Header  */}
      <CreatePostHeader />
      {/* Main Content  */}
      <div className="upload-container flex flex-col md:flex-row">
        {/* Left Side - Image Preview */}

        <ImagePreview />
        {/* Right Side - Post Details  */}
        <CreatePostDetails />
      </div>
    </>
  );
};

export default CreatePostPage;
