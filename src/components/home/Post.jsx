import { useState } from "react";
import { useAvatar } from "../../hooks/useAvatar";
import AddComment from "./AddComment";
import CommentsCount from "./CommentsCount";
import PostAction from "./PostAction";
import PostCaption from "./PostCaption";
import PostHeader from "./PostHeader";
import PostImage from "./PostImage";
import PostLikes from "./PostLikes";

const Post = ({ post, showPopup, setShowPopup }) => {
  const { avatarUrl } = useAvatar(post);
  const [comments, setComments] = useState(post?.comments || []);
  console.log(post);
  console.log("comments", comments);
  return (
    <>
      <article className="border border-gray-200 pb-4 mb-4 max-w-[560px] mx-auto rounded-md">
        {/* Post Header */}
        <PostHeader
          avatarUrl={avatarUrl}
          createdAt={post?.createdAt}
          userName={post?.user?.name}
        />

        {/* Post Image */}
        <PostImage postImageUrl={post.image} />

        {/* Post Actions */}
        <PostAction
          post={post}
          showPopup={showPopup}
          setShowPopup={setShowPopup}
        />

        {/* Likes */}
        {post?.likesCount > 0 && (
          <PostLikes likesCount={post?.likesCount} likes={post?.likes} />
        )}

        {/* Caption */}
        <PostCaption userName={post?.user?.name} caption={post?.caption} />

        {/* Comments */}
        {comments.length > 0 && <CommentsCount allComments={comments.length} />}
        {/* Add Comment */}
        <AddComment
          post={post}
          showPopup={showPopup}
          setShowPopup={setShowPopup}
          comments={comments}
          setComments={setComments}
        />
      </article>
    </>
  );
};

export default Post;
