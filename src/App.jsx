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
import AuthProvider from "./providers/AuthProvider";
import { PopupProvider } from "./providers/PopupProvider";
import ProfileImageProvider from "./providers/ProfileImageProvider";
import ProfileProvider from "./providers/ProfileProvider";
import PrivateRoute from "./route/PrivateRoute";
import PublicRoute from "./route/PublicRoute";

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
        path: "profile/:userId",
        element: (
          <PrivateRoute>
            <ProfilePage />
          </PrivateRoute>
        ),
      },
      {
        path: "edit-profile",
        element: (
          <PrivateRoute>
            <EditProfilePage />
          </PrivateRoute>
        ),
      },
      {
        path: "create-post",
        element: (
          <PrivateRoute>
            <CreatePostPage />
          </PrivateRoute>
        ),
      },
      {
        path: "posts/:postId",
        element: (
          <PrivateRoute>
            <PostDetailsPage />
          </PrivateRoute>
        ),
      },
      {
        path: "notifications",
        element: (
          <PrivateRoute>
            <NotificationPage />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "register",
    element: (
      <PublicRoute>
        <RegistrationPage />
      </PublicRoute>
    ),
  },
  {
    path: "login",
    element: (
      <PublicRoute>
        <LoginPage />
      </PublicRoute>
    ),
  },
]);

function App() {
  return (
    <AuthProvider>
      <PopupProvider>
        <ProfileImageProvider>
          <ProfileProvider>
            <RouterProvider router={router} />
          </ProfileProvider>
        </ProfileImageProvider>
      </PopupProvider>
    </AuthProvider>
  );
}

export default App;
