import { Link } from "react-router-dom";
import LogoImg from "../assets/logo-2.svg";
import RegisterForm from "../components/auth/RegisterForm";

const RegistrationPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center py-8 sm:px-6 lg:px-8">
      <div className="signup-container">
        {/* PhotoBooth Logo  */}
        <div className="flex justify-center mb-4">
          <img src={LogoImg} alt="PhotoBooth" className="h-[51px]" />
        </div>

        {/* Sign Up Form */}
        <RegisterForm />
        {/* Login Box  */}
        <div className="bg-white p-6 border border-gray-300 text-center mb-4 rounded-md">
          <p className="text-sm">
            Have an account?{" "}
            <Link to="/login" className="text-blue-500 font-semibold">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
