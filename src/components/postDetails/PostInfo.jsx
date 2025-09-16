import User1 from "../../assets/users/user-1.png";
import PostActions from "./PostActions";
import PostComments from "./PostComments";
import PostDetailsHeader from "./PostDetailsHeader";

const PostInfo = () => {
  return (
    <div className="w-full md:w-1/2 flex flex-col">
      {/* Post Header */}
      <PostDetailsHeader />

      <div className="p-3">
        <p className="text-sm ">
          ডকুমেন্টেশন থেকে রিয়্যাক্ট ও নেক্সট জে.এস-এর মৌলিক ও আবশ্যিক বিষয়সমূহ
          বুঝার পাশাপাশি এই কোর্সের প্রজেক্ট ভিত্তিক শেখানোর পদ্ধতি আপনাকে একজন
          দক্ষ রিয়্যাক্ট ফ্রন্ট-এন্ড ডেভেলপার হয়ে উঠতে সাহায্য করবে বলে আমাদের
          বিশ্বাস।
        </p>
      </div>

      {/* Comments Section */}
      <PostComments />

      {/* Post Actions */}
      <PostActions />

      {/* Add Comment */}
      <div className="p-3 flex items-center">
        <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-300 mr-2">
          <img
            src={User1}
            alt="User avatar"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 flex items-center justify-between">
          <input
            type="text"
            placeholder="Add a comment..."
            className="text-sm w-full outline-none"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default PostInfo;
