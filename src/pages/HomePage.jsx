import Post from "../components/home/Post";
import { useAuth } from "../hooks/useAuth";

const HomePage = () => {
  const { auth } = useAuth();
  return (
    <div className="max-w-6xl mx-auto w-full py-10">
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default HomePage;
