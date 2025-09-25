import { useState } from "react";

const PostCaption = ({ caption, userName }) => {
  const [showFullCaption, setShowFullCaption] = useState(false);
  const shortCaption = caption?.slice(0, 100);
  return (
    <div className="px-3 mt-2">
      <p className="text-sm">
        <span className="font-semibold">{userName}</span>
        <span className="caption-text">
          {" "}
          {showFullCaption ? caption : shortCaption}{" "}
        </span>
        {caption?.length > 100 && (
          <>
            <span className="text-gray-500">... </span>
            <button
              onClick={() => setShowFullCaption(!showFullCaption)}
              className="text-gray-500 text-sm cursor-pointer"
            >
              {showFullCaption ? "less" : "more"}
            </button>
          </>
        )}
      </p>
    </div>
  );
};

export default PostCaption;
