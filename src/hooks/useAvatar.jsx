import { useProfile } from "../hooks/useProfile";

export const useAvatar = (post) => {
  console.log(post);
  const { state } = useProfile();

  const isMe = state?.user?._id === post?.user?._id;
  console.log("state", state?.user?.avatar);
  console.log("post", post?.user?.avatar);

  const avatar = isMe ? `${state?.user?.avatar}` : `${post?.user?.avatar}`;

  const avatarUrl = `${import.meta.env.VITE_BASE_URL}/${avatar}`;

  return { avatarUrl };
};
