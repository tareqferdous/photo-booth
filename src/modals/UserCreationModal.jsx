const UserCreationModal = ({ navigate, setAuth, registerData }) => {
  const handleGoHome = () => {
    setAuth(registerData);
    navigate("/");
  };

  const handleGoProfile = () => {
    setAuth(registerData);
    navigate(`/edit-profile`);
  };
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-in fade-in duration-200">
      {/* Modal Container */}
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md transform transition-all duration-200 animate-in zoom-in-95 slide-in-from-bottom-4">
        <div className="p-8 flex flex-col items-center">
          <div className="success-icon mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-center mb-2">
            Account Created
          </h3>
          <p className="text-gray-500 text-center mb-6">
            Your PhotoBooth account has been created successfully.
          </p>
          <button onClick={handleGoHome} className="primary-button mb-3">
            Continue to Feed
          </button>
          <button onClick={handleGoProfile} className="secondary-button">
            Complete Your Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCreationModal;
