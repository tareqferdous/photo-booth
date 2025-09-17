import { useState } from "react";
import { PopupContext } from "../context";

export const PopupProvider = ({ children }) => {
  const [popup, setPopup] = useState(null);

  const handleCloseSession = () => {
    setPopup(null);
    window.location.href = "/login";
  };

  return (
    <PopupContext.Provider value={{ popup, setPopup }}>
      {children}

      {popup === "session-expired" && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50">
          <div class="dialog">
            <div class="p-8 flex flex-col items-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-red-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-red-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  {/* Clock circle */}
                  <circle cx="12" cy="12" r="9" />
                  {/* Clock hands */}
                  <path d="M12 7v5l3 3" />
                  {/* Expire slash */}
                  <line x1="4" y1="4" x2="20" y2="20" />
                </svg>
              </div>

              <h3 class="text-xl font-semibold text-center mb-2">
                Session Expired!
              </h3>
              <p class="text-gray-500 text-center mb-6">
                Your session has expired. Please log in again.
              </p>
              <button onClick={handleCloseSession} class="primary-button mb-3">
                Continue
              </button>
            </div>
          </div>
        </div>
      )}
    </PopupContext.Provider>
  );
};
