import { useAvatar } from "../../hooks/useAvatar";
import AddComment from "./AddComment";
import CommentsCount from "./CommentsCount";
import PostAction from "./PostAction";
import PostCaption from "./PostCaption";
import PostHeader from "./PostHeader";
import PostImage from "./PostImage";
import PostLikes from "./PostLikes";

const Post = ({ post }) => {
  const { avatarUrl } = useAvatar(post);
  console.log(post);
  return (
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
      <PostAction />

      {/* Likes */}
      <PostLikes />

      {/* Caption */}
      <PostCaption />

      {/* Comments */}
      <CommentsCount />
      {/* Add Comment */}
      <AddComment />
    </article>
  );
};

export default Post;
