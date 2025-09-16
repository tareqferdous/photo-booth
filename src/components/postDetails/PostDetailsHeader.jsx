import Author from "../../assets/articles/author-1.svg";

const PostDetailsHeader = () => {
  return (
    <div className="flex items-center justify-between p-3 border-b border-gray-200">
      <a href="./profile.html">
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full overflow-hidden">
            <div className="w-full h-full rounded-full overflow-hidden bg-white">
              <img
                src={Author}
                alt="User avatar"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
          <div className="ml-2">
            <div className="flex items-center">
              <span className="font-semibold text-sm">Learn with Sumit</span>
            </div>
            <div className="flex items-center">
              <span className="text-[10px] text-gray-600">
                June 9, 2025 08:00 PM
              </span>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default PostDetailsHeader;
