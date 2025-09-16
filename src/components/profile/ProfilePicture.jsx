import User1 from "../../assets/users/user-1.png";

const ProfilePicture = () => {
  return (
    <div className="bg-white rounded-lg p-6 mb-6">
      <div className="flex items-center">
        <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
          <img
            src={User1}
            alt="Saad Hasan"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h2 className="font-semibold text-base">Saad Hasan</h2>
          <p className="text-gray-500">@saadh393</p>
        </div>
        <button className="ml-auto bg-blue-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-600 transition">
          Change photo
        </button>
      </div>
    </div>
  );
};

export default ProfilePicture;
