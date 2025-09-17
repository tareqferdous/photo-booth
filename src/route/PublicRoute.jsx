import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const PublicRoute = ({ children }) => {
  const { auth } = useAuth();
  return !auth?.user?.username ? children : <Navigate to="/" />;
};

export default PublicRoute;
