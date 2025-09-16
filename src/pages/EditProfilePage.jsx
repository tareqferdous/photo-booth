import ChangePassword from "../components/profile/ChangePassword";
import ProfilePicture from "../components/profile/ProfilePicture";
import UserInfo from "../components/profile/UserInfo";

const EditProfilePage = () => {
  return (
    <div className="bg-gray-50">
      <div className="edit-container">
        <h1 className="text-2xl font-bold mb-8">Edit profile</h1>

        <ProfilePicture />

        <UserInfo />

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
          <button className="bg-blue-100 text-blue-500 px-6 py-2 rounded-md text-sm font-medium hover:bg-blue-200 transition">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditProfilePage;
