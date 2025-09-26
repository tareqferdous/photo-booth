const CommentsCount = ({ allComments }) => {
  return (
    <div className="px-3 mt-1">
      <button className="text-gray-500 text-sm">
        View all {allComments} comments
      </button>
    </div>
  );
};

export default CommentsCount;
