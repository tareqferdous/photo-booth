import { useRef } from "react";
import { actions } from "../../actions";
import useAxios from "../../hooks/useAxios";
import { useProfile } from "../../hooks/useProfile";

const ProfilePicture = () => {
  const { state, dispatch } = useProfile();
  const { api } = useAxios();
  const fileUploaderRef = useRef();

  const handleImageUpload = (event) => {
    event.preventDefault();
    fileUploaderRef.current.addEventListener("change", updateImageDisplay);
    fileUploaderRef.current.click();
  };

  const updateImageDisplay = async () => {
    try {
      const formData = new FormData();
      for (const file of fileUploaderRef.current.files) {
        formData.append("avatar", file);
      }

      const response = await api.patch(
        `${import.meta.env.VITE_SERVER_BASE_URL}/users/me/avatar`,
        formData
      );
      if (response.status === 200) {
        dispatch({
          type: actions.profile.IMAGE_UPDATED,
          data: response.data,
        });
      }
    } catch (error) {
      dispatch({
        type: actions.profile.DATA_FETCH_ERROR,
        error: error.message,
      });
    }
  };

  console.log("user", state?.user);

  return (
    <div className="bg-white rounded-lg p-6 mb-6">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
            <img
              src={`${import.meta.env.VITE_BASE_URL}/${
                state?.user?.avatar
              }?v=${Date.now()}`}
              alt={state?.user?.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="font-semibold text-base">Saad Hasan</h2>
            <p className="text-gray-500">@saadh393</p>
          </div>
        </div>
        <form id="form" encType="multipart/form-data">
          <button
            type="button"
            onClick={handleImageUpload}
            className="ml-auto bg-blue-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-600 transition cursor-pointer"
          >
            Change photo
          </button>
          <input type="file" ref={fileUploaderRef} className="hidden" />
        </form>
      </div>
    </div>
  );
};

export default ProfilePicture;
