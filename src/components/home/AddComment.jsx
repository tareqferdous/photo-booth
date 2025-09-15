const AddComment = () => {
  return (
    <div className="px-3 mt-2 flex justify-between items-center">
      <input
        type="text"
        placeholder="Add a comment..."
        className="text-sm w-full outline-none"
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 stroke-zinc-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M3.714 3.048a.498.498 0 0 0-.683.627l2.843 7.627a2 2 0 0 1 0 1.396l-2.842 7.627a.498.498 0 0 0 .682.627l18-8.5a.5.5 0 0 0 0-.904z" />
        <path d="M6 12h16" />
      </svg>
    </div>
  );
};

export default AddComment;
