import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Layout from "./components/common/Layout";
import CreatePostPage from "./pages/CreatePostPage";
import EditProfilePage from "./pages/EditProfilePage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import NotificationPage from "./pages/NotificationPage";
import PostDetailsPage from "./pages/PostDetailsPage";
import ProfilePage from "./pages/ProfilePage";
import RegistrationPage from "./pages/RegistrationPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "profile",
        element: <ProfilePage />,
      },
      {
        path: "edit-profile",
        element: <EditProfilePage />,
      },
      {
        path: "create-post",
        element: <CreatePostPage />,
      },
      {
        path: "post-details",
        element: <PostDetailsPage />,
      },
      {
        path: "notifications",
        element: <NotificationPage />,
      },
    ],
  },
  {
    path: "register",
    element: <RegistrationPage />,
  },
  {
    path: "login",
    element: <LoginPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
