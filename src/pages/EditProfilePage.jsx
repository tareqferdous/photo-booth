import { useState } from "react";
import { actions } from "../actions";
import ChangePassword from "../components/profile/ChangePassword";
import ProfilePicture from "../components/profile/ProfilePicture";
import UserInfo from "../components/profile/UserInfo";
import useAxios from "../hooks/useAxios";
import { useProfile } from "../hooks/useProfile";

const EditProfilePage = () => {
  const { api } = useAxios();
  const { state, dispatch } = useProfile();
  const [bio, setBio] = useState(state?.user?.bio);
  const [website, setWebsite] = useState(state?.user?.website);
  const [gender, setGender] = useState(state?.user?.gender);

  const handleUserUpdate = async () => {
    const formData = {
      bio,
      website,
      gender,
    };
    dispatch({ type: actions.profile.DATA_FETCHING });

    try {
      const response = await api.patch(
        `${import.meta.env.VITE_SERVER_BASE_URL}/users/me`,
        formData
      );

      if (response.status === 200) {
        dispatch({
          type: actions.profile.USER_DATA_EDITED,
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
  return (
    <div className="bg-gray-50">
      <div className="edit-container">
        <h1 className="text-2xl font-bold mb-8">Edit profile</h1>

        <ProfilePicture />

        <UserInfo
          bio={bio}
          setBio={setBio}
          website={website}
          setWebsite={setWebsite}
          gender={gender}
          setGender={setGender}
        />

        <ChangePassword />

        {/* Privacy Note  */}
        <div className="mb-6">
          <p className="text-gray-500 text-sm">
            Certain profile info, like your name, bio and links, is visible to
            everyone.
            <a href="#" className="text-blue-500">
              See what profile info is visible
            </a>
          </p>
        </div>

        {/* Submit Button  */}
        <div className="flex justify-end">
          <button
            onClick={handleUserUpdate}
            className="bg-blue-100 text-blue-500 px-6 py-2 rounded-md text-sm font-medium hover:bg-blue-200 transition"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditProfilePage;
