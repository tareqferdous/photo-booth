import User1 from "../../assets/users/user-1.png";

const PostComment = () => {
  return (
    <div className="flex mb-4">
      <div className="w-8 h-8 rounded-full overflow-hidden bg-gradient-to-r  mr-2 ">
        <div className="w-full h-full rounded-full overflow-hidden bg-white p-[1px] mr-2">
          <img
            src={User1}
            alt="Saad Hasan"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
      </div>
      <div className="flex-1">
        <div className="flex items-center">
          <span className="font-semibold text-sm">Saad Hasan</span>

          <span className="text-xs text-gray-500 ml-2">3h</span>
        </div>
        <p className="text-sm mt-2 text-gray-800">
          Tucked away in Raipur, this thoughtfully designed multigenerational
          home by Studio Jane Designs is a study in quiet sophistication and
          mindful living. Aptly named Silk Route, the residence is as serene and
          introspective as it is welcoming—a space crafted for both intimate
          reflection and joyful gatherings.
        </p>
      </div>
    </div>
  );
};

export default PostComment;
