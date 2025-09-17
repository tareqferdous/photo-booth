import { useContext } from "react";
import { PopupContext } from "../context";

export const usePopup = () => useContext(PopupContext);
