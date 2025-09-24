import axios from "axios";
import { useEffect, useRef, useState } from "react";
import Post from "../components/home/Post";
import { useAuth } from "../hooks/useAuth";

const HomePage = () => {
  const { auth } = useAuth();
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const limit = 10;
  const postsRef = useRef(null);

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
            } else {
              const publicPosts = response.data.slice(0, 4);
              setPosts(publicPosts);
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
        console.log("Loading more posts...");
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

  return (
    <div className="max-w-6xl mx-auto w-full py-10">
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
      {hasMore && <div ref={postsRef}>Loading more posts...</div>}
    </div>
  );
};

export default HomePage;
