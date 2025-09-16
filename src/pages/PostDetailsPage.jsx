import PostImage from "../components/postDetails/PostImage";
import PostInfo from "../components/postDetails/PostInfo";
import PostListCard from "../components/postDetails/PostListCard";

const PostDetailsPage = () => {
  return (
    <div className="max-w-6xl w-full py-10 ml-[var(--sidebar-width)] px-4">
      {/* Post Details Section  */}
      <div className="bg-white border border-gray-200 rounded-sm overflow-hidden mb-8 mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row">
          <PostImage />

          <PostInfo />
        </div>
      </div>

      {/* More Posts Section */}
      <div className="mb-8 mx-auto max-w-5xl">
        <h2 className="text-sm text-gray-500 font-normal mb-4">
          More posts from{" "}
          <span className="font-semibold text-black">Learn with Sumit</span>
        </h2>

        <div className="grid grid-cols-3 gap-1">
          <PostListCard />
          <PostListCard />
          <PostListCard />
          <PostListCard />
          <PostListCard />
          <PostListCard />
        </div>
      </div>
    </div>
  );
};

export default PostDetailsPage;
