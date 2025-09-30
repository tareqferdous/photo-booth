import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import useAxios from "../../hooks/useAxios";

const AddComment = ({
  post,
  showPopup,
  setShowPopup,
  comments,
  setComments,
}) => {
  const [comment, setComment] = useState("");
  const { auth } = useAuth();
  const { api } = useAxios();

  const addComment = async (e) => {
    if (!auth?.user?._id) {
      setShowPopup(true);
      return;
    }
    const keyCode = event.keyCode;

    if (keyCode === 13) {
      try {
        const response = await api.post(
          `${import.meta.env.VITE_SERVER_BASE_URL}/posts/${post?._id}/comment`,
          { text: comment }
        );

        if (response.status === 201) {
          setComments([...comments, response?.data?.comment]);
        }
      } catch (error) {
        console.error(error);
      }
    }
  };
  return (
    <div className="px-3 mt-2 flex justify-between items-center">
      <input
        type="text"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        onKeyDown={(e) => addComment(e)}
        placeholder="Add a comment..."
        className="text-sm w-full outline-none"
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 stroke-zinc-600"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3.714 3.048a.498.498 0 0 0-.683.627l2.843 7.627a2 2 0 0 1 0 1.396l-2.842 7.627a.498.498 0 0 0 .682.627l18-8.5a.5.5 0 0 0 0-.904z" />
        <path d="M6 12h16" />
      </svg>
    </div>
  );
};

export default AddComment;
