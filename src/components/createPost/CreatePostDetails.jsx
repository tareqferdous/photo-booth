import User1 from "../../assets/users/user-1.png";
import AdditionalSetting from "./AdditionalSetting";

const CreatePostDetails = () => {
  return (
    <div className="w-full md:w-1/2 bg-white flex flex-col">
      {/* User Info */}
      <div className="flex items-center p-4 border-b border-gray-200">
        <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-300">
          <img
            src={User1}
            alt="User avatar"
            className="w-full h-full object-cover"
          />
        </div>
        <span className="ml-3 font-semibold text-sm">Saad Hasan</span>
      </div>

      {/* Caption Section  */}
      <div className="p-4 border-b border-gray-200 flex-grow">
        <div className="mb-2">
          <p className="font-medium text-base mb-2">Caption Section</p>
          <textarea
            className="w-full caption-input border-0 outline-none text-sm"
            placeholder="Write a caption..."
          ></textarea>
        </div>

        {/* Character Count  */}
        <div className="flex justify-between items-center">
          <button className="text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
          <span className="text-gray-400 text-xs">15/2,200</span>
        </div>
      </div>

      {/* Additional Options  */}
      <AdditionalSetting />
    </div>
  );
};

export default CreatePostDetails;
