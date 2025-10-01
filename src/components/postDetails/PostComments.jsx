import PostComment from "./PostComment";

const PostComments = ({ comments, setPostComments }) => {
  return (
    <div className="comments-section flex-grow p-3 border-b border-gray-200">
      {/* Post Owner Comment */}
      <h3 className="font-bold pb-4">Comments</h3>

      {comments?.length > 0 ? (
        comments.map((comment) => (
          <PostComment
            key={comment._id}
            comment={comment}
            setPostComments={setPostComments}
          />
        ))
      ) : (
        <p className="text-gray-500">No comments yet.</p>
      )}
    </div>
  );
};

export default PostComments;
