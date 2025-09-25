import axios from "axios";
import { useEffect, useRef, useState } from "react";
import Post from "../components/home/Post";
import { useAuth } from "../hooks/useAuth";
import LoginRequiredModal from "../modals/LoginRequiredModal";

const HomePage = () => {
  const { auth } = useAuth();
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [showPopup, setShowPopup] = useState(false);
  const limit = 10;
  const postsRef = useRef(null);
  const popupRef = useRef(null);

  useEffect(() => {
    if (!auth?.user?._id) {
      const fetchPublicPosts = async () => {
        try {
          const response = await axios.get(
            `${
              import.meta.env.VITE_SERVER_BASE_URL
            }/posts/?page=1&limit=${limit}`
          );
          if (response.status === 200) {
            const publicPosts = response.data.slice(0, 4);
            setPosts(publicPosts);
            setHasMore(false);
          }
        } catch (error) {
          console.error(error);
        }
      };

      fetchPublicPosts();
    }

    const onIntersection = (items) => {
      const popupLoader = items[0];
      if (popupLoader.isIntersecting && !auth?.user?._id) {
        setShowPopup(true);
      }
    };

    const observer = new IntersectionObserver(onIntersection);

    if (observer && popupRef.current) {
      observer.observe(popupRef.current);
    }

    // cleanup
    return () => {
      if (observer) observer.disconnect();
    };
  }, [auth]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          `${
            import.meta.env.VITE_SERVER_BASE_URL
          }/posts/?page=${page}&limit=${limit}`
        );
        if (response.status === 200) {
          if (response.data.length === 0) {
            setHasMore(false);
          } else {
            if (auth?.user?._id) {
              setPosts((prev) => [...prev, ...response.data]);
              setPage((pre) => pre + 1);
            }
          }
        }
      } catch (error) {
        console.error(error);
      }
    };

    const onIntersection = (items) => {
      const postLoader = items[0];
      if (postLoader.isIntersecting && hasMore) {
        fetchPosts();
      }
    };

    const observer = new IntersectionObserver(onIntersection);

    if (observer && postsRef.current) {
      observer.observe(postsRef.current);
    }

    // cleanup
    return () => {
      if (observer) observer.disconnect();
    };
  }, [auth, page, hasMore]);

  console.log("showPopup", showPopup);

  return (
    <div className="max-w-6xl mx-auto w-full py-10">
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}

      {/* Unauthorized popup trigger sentinel */}
      {!auth?.user?._id && <div ref={popupRef} className="h-10"></div>}

      {auth?.user?._id && hasMore && (
        <div ref={postsRef} className="text-center py-4 text-gray-500">
          Loading more posts...
        </div>
      )}

      {showPopup && (
        <LoginRequiredModal closeModal={() => setShowPopup(false)} />
      )}
    </div>
  );
};

export default HomePage;
