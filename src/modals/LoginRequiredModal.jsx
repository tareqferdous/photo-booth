import { useNavigate } from "react-router-dom";

const LoginRequiredModal = ({ closeModal }) => {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-in fade-in duration-200">
      {/* Modal Container */}
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md transform transition-all duration-200 animate-in zoom-in-95 slide-in-from-bottom-4">
        <div className="flex justify-end p-4">
          <button
            onClick={closeModal}
            className=" text-gray-400 hover:text-gray-600 hover:bg-gray-100 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 cursor-pointer"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
        <div>
          <div className="p-8 flex flex-col items-center">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-blue-500/25">
              <svg
                className="w-9 h-9 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3 tracking-tight">
              Login Required!
            </h2>
            <p className="text-gray-500 mb-8 leading-relaxed">
              You need to be logged in to see more content.
            </p>
            <div className="flex space-x-3 items-center">
              <button
                onClick={handleLogin}
                className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold py-3.5 px-6 rounded-xl shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 transform hover:-translate-y-0.5 transition-all duration-200 hover:from-blue-600 hover:to-indigo-700 cursor-pointer"
              >
                Login
              </button>

              <button
                onClick={closeModal}
                className="w-full bg-gray-50 text-gray-700 font-semibold py-3.5 px-6 rounded-xl border border-gray-200 hover:bg-gray-100 hover:border-gray-300 transform hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginRequiredModal;
