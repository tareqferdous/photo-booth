import { useContext } from "react";
import { ProfileImageContext } from "../context";

export const useProfileImage = () => {
  return useContext(ProfileImageContext);
};
