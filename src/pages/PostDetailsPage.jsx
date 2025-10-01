import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostImage from "../components/postDetails/PostImage";
import PostInfo from "../components/postDetails/PostInfo";
import PostListCard from "../components/postDetails/PostListCard";
import { useAuth } from "../hooks/useAuth";
import useAxios from "../hooks/useAxios";
import { useProfile } from "../hooks/useProfile";

const PostDetailsPage = () => {
  const { postId } = useParams();
  const { auth } = useAuth();
  const { api } = useAxios();

  const { state, dispatch } = useProfile();
  const [postDetails, setPostDetails] = useState(null);
  const [similarPosts, setSimilarPosts] = useState([]);

  useEffect(() => {
    const fetchSinglePostDetails = async () => {
      try {
        const response = await api.get(
          `${import.meta.env.VITE_SERVER_BASE_URL}/posts/${postId}`
        );
        if (response.status === 200) {
          setPostDetails(response.data);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchSinglePostDetails();
  }, [postId, api]);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await api.get(
          `${import.meta.env.VITE_SERVER_BASE_URL}/posts/user/${
            postDetails?.userId
          }`
        );

        if (response.status === 200) {
          setSimilarPosts(response?.data?.posts);
        }

        console.log("response from user posts api", response);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProfile();
  }, [postDetails?.userId, api]);

  console.log("postDetails", postDetails);

  return (
    <div className="max-w-6xl w-full py-10 ml-[var(--sidebar-width)] px-4">
      {/* Post Details Section  */}
      <div className="bg-white border border-gray-200 rounded-sm overflow-hidden mb-8 mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row">
          <PostImage image={postDetails?.image} />

          <PostInfo
            caption={postDetails?.caption}
            userInfo={postDetails?.user}
            comments={postDetails ? postDetails?.comments : []}
            likes={postDetails ? postDetails?.likes : []}
            postTime={postDetails ? postDetails?.createdAt : ""}
            postId={postDetails?._id}
          />
        </div>
      </div>

      {/* More Posts Section */}
      <div className="mb-8 mx-auto max-w-5xl">
        <h2 className="text-sm text-gray-500 font-normal mb-4">
          More posts from{" "}
          <span className="font-semibold text-black">Learn with Sumit</span>
        </h2>

        <div className="grid grid-cols-3 gap-1">
          {similarPosts
            .filter((post) => post._id !== postId)
            .map((post) => (
              <PostListCard key={post._id} post={post} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default PostDetailsPage;
