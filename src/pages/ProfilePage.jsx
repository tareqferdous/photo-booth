import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { actions } from "../actions";
import ProfileHeader from "../components/profile/ProfileHeader";
import ProfilePost from "../components/profile/ProfilePost";
import { useAuth } from "../hooks/useAuth";
import useAxios from "../hooks/useAxios";
import { useProfile } from "../hooks/useProfile";

const ProfilePage = () => {
  const { api } = useAxios();
  const { auth } = useAuth();
  const { userId } = useParams();
  const { state, dispatch } = useProfile();

  useEffect(() => {
    dispatch({ type: actions.profile.DATA_FETCHING });
    const fetchProfile = async () => {
      try {
        const response = await api.get(
          `${import.meta.env.VITE_SERVER_BASE_URL}/posts/user/${userId}`
        );

        if (response.status === 200) {
          dispatch({ type: actions.profile.DATA_FETCHED, data: response.data });
        }
      } catch (error) {
        dispatch({
          type: actions.profile.DATA_FETCH_ERROR,
          error: error.message,
        });
      }
    };

    fetchProfile();
  }, [api, userId, dispatch]);

  const isMe = auth?.user?._id === state?.user?._id;

  return (
    <div className="main-container">
      <div className="profile-container">
        {/* Profile Header  */}
        <ProfileHeader user={state?.user} posts={state?.posts} isMe={isMe} />

        <section>
          <h3 className="font-semibold text-lg mb-4">Posts</h3>
          {/* Photo Grid */}
          <div className="grid grid-cols-3 gap-1">
            {state?.posts.length > 0 ? (
              state.posts.map((post) => (
                <ProfilePost key={post._id} post={post} />
              ))
            ) : (
              <p>No posts available</p>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProfilePage;
