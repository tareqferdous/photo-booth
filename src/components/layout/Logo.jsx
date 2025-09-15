import LogoImg from "../../assets/logo-2.svg";
const Logo = () => {
  return (
    <a
      href="./index.html"
      className="flex gap-2 items-center font-medium py-4 mb-8"
    >
      <img src={LogoImg} alt="PhotoBooth" className="h-6 object-contain" />
      <h2 className="text-lg">Photo Booth</h2>
    </a>
  );
};

export default Logo;
