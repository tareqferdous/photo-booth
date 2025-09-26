const LikedUsersModal = ({ likes, setShowLikes }) => {
  return (
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-in fade-in duration-300"
      onClick={() => setShowLikes(false)}
    >
      {/* Modal Container */}
      <div
        className="bg-white rounded-2xl shadow-2xl w-full max-w-sm transform transition-all duration-300 animate-in zoom-in-95 slide-in-from-bottom-4"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-100">
          <div className="flex items-center gap-2">
            {/* Heart SVG Icon */}
            <svg
              className="w-5 h-5 text-red-500 fill-current"
              viewBox="0 0 24 24"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
            <h3 className="font-semibold text-lg text-gray-900">
              Liked by {likes.length} {likes.length === 1 ? "person" : "people"}
            </h3>
          </div>
          <button
            onClick={() => setShowLikes(false)}
            className="p-1 hover:bg-gray-100 rounded-full transition-colors duration-200 cursor-pointer"
            aria-label="Close modal"
          >
            {/* X SVG Icon */}
            <svg
              className="w-5 h-5 text-gray-500"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="p-4">
          <div className="max-h-64 overflow-y-auto space-y-3">
            {Array.isArray(likes) && likes.length > 0 ? (
              likes.map((like) => (
                <div
                  key={like._id}
                  className="flex items-center gap-3 hover:bg-gray-50 p-2 rounded-lg transition-colors duration-200"
                >
                  <div className="relative">
                    <img
                      src={`${import.meta.env.VITE_BASE_URL}/${like.avatar}`}
                      alt={`${like?.name}'s avatar`}
                      className="w-10 h-10 rounded-full object-cover border-2 border-gray-200"
                      onError={(e) => {
                        e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                          like?.name || "User"
                        )}&background=e5e7eb&color=6b7280`;
                      }}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-gray-900 truncate">
                      {like?.name || "Anonymous User"}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <></>
            )}
          </div>
        </div>

        <div className="px-4 pb-4">
          <button
            onClick={() => setShowLikes(false)}
            className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2 px-4 rounded-lg transition-colors duration-200 cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default LikedUsersModal;
