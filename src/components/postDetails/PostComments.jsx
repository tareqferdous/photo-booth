import PostComment from "./PostComment";

const PostComments = () => {
  return (
    <div className="comments-section flex-grow p-3 border-b border-gray-200">
      {/* Post Owner Comment */}
      <h3 className="font-bold pb-4">Comments</h3>

      {/* Comment One */}
      <PostComment />
      <PostComment />
      <PostComment />
    </div>
  );
};

export default PostComments;
