import { useEffect, useState } from "react";
import ProfileHeader from "../components/profile/ProfileHeader";
import ProfilePost from "../components/profile/ProfilePost";
import { useAuth } from "../hooks/useAuth";
import useAxios from "../hooks/useAxios";

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { api } = useAxios();
  const { auth } = useAuth();

  useEffect(() => {
    setLoading(true);
    const fetchProfile = async () => {
      try {
        const response = await api.get(
          `${import.meta.env.VITE_SERVER_BASE_URL}/users/me`
        );
        setUser(response?.data);
      } catch (error) {
        console.error(error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);
  return (
    <div className="main-container">
      <div className="profile-container">
        {/* Profile Header  */}
        <ProfileHeader user={user} />

        <section>
          <h3 className="font-semibold text-lg mb-4">Posts</h3>
          {/* Photo Grid */}
          <div className="grid grid-cols-3 gap-1">
            {/* Grid Item 1 */}
            <ProfilePost />
            <ProfilePost />
            <ProfilePost />
            <ProfilePost />
            <ProfilePost />
            <ProfilePost />
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProfilePage;
