import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import useAxios from "../../hooks/useAxios";

const PostComment = ({ comment, setPostComments }) => {
  const { auth } = useAuth();
  const { api } = useAxios();
  const [openMenuId, setOpenMenuId] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedComment, setEditedComment] = useState(comment?.text || "");

  const toggleMenu = () => {
    setOpenMenuId(!openMenuId);
  };
  const handleEdit = () => {
    setIsEditing(true);
    setEditedComment(comment?.text);
    setOpenMenuId(false);
  };

  const handleDelete = async (commentId) => {
    try {
      const response = await api.delete(
        `${import.meta.env.VITE_SERVER_BASE_URL}/posts/comment/${commentId}`
      );

      if (response.status === 200) {
        console.log("Comment deleted successfully");
        setPostComments((prevComments) =>
          prevComments.filter((c) => c._id !== commentId)
        );
        setOpenMenuId(null);
      }
    } catch (error) {
      console.error("Error deleting comment:", error);
    }
  };

  const handleEditSave = async (commentId) => {
    try {
      const response = await api.patch(
        `${import.meta.env.VITE_SERVER_BASE_URL}/posts/comment/${commentId}`,
        { text: editedComment }
      );

      if (response.status === 200) {
        setPostComments((prevComments) =>
          prevComments.map((c) =>
            c._id === commentId ? { ...c, text: editedComment } : c
          )
        );
        setIsEditing(false);
      }
    } catch (error) {
      console.error("Error updating comment:", error);
    }
  };

  const handleEditCancel = () => {
    setIsEditing(false);
    setEditedComment(comment?.text);
  };

  const isMyComment = auth?.user?._id === comment?.user?._id;

  return (
    <>
      <div className=" p-2 relative">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-full overflow-hidden bg-gradient-to-r  mr-2 ">
            <div className="w-full h-full rounded-full overflow-hidden bg-white p-[1px] mr-2">
              <img
                src={`${import.meta.env.VITE_BASE_URL}/${
                  comment?.user?.avatar
                }`}
                alt={comment?.user?.name}
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className="font-semibold text-gray-900 text-sm">
                {comment?.user?.name}
              </h3>
              <span className="text-xs text-gray-500">
                {new Date(comment?.createdAt).toLocaleString()}
              </span>
            </div>
            {isEditing ? (
              <div className="mt-2">
                <textarea
                  value={editedComment}
                  onChange={(e) => setEditedComment(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  rows="3"
                  autoFocus
                />
                <div className="flex gap-2 mt-2">
                  <button
                    onClick={() => handleEditSave(comment?._id)}
                    className="px-4 py-1.5 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Save
                  </button>
                  <button
                    onClick={handleEditCancel}
                    className="px-4 py-1.5 bg-gray-200 text-gray-700 text-sm rounded-lg hover:bg-gray-300 transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <p className="mt-1 text-gray-700">{comment?.text}</p>
            )}
          </div>

          <div className="relative">
            {isMyComment && (
              <button
                onClick={toggleMenu}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors cursor-pointer"
                aria-label="More options"
              >
                <div className="flex flex-col gap-1">
                  <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
                  <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
                  <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
                </div>
              </button>
            )}

            {openMenuId && (
              <>
                <div
                  className="fixed inset-0 z-10"
                  onClick={() => setOpenMenuId(false)}
                />
                <div className="absolute right-0 top-8 z-20 bg-white rounded-lg shadow-lg border border-gray-200 py-1 w-32">
                  <button
                    onClick={() => handleEdit(comment.id)}
                    className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(comment?._id)}
                    className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-gray-100 transition-colors"
                  >
                    Delete
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default PostComment;
