import { useState } from "react";
import { ProfileImageContext } from "../context";

const ProfileImageProvider = ({ children }) => {
  const [isProfileImageUpdated, setIsProfileImageUpdated] = useState(false);
  return (
    <ProfileImageContext.Provider
      value={{ isProfileImageUpdated, setIsProfileImageUpdated }}
    >
      {children}
    </ProfileImageContext.Provider>
  );
};

export default ProfileImageProvider;
