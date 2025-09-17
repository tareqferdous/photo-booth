import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import Field from "../common/Field";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  const navigate = useNavigate();
  const { setAuth } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const location = useLocation();

  const from = location.state?.from || "/";

  const submitForm = async (formData) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_BASE_URL}/auth/login`,
        formData
      );
      if (response.status === 200) {
        const { user, accessToken, refreshToken } = response.data;
        if (user && accessToken && refreshToken) {
          setAuth({ user, accessToken, refreshToken });
          navigate(from);
        }
      }
    } catch (error) {
      console.log(error);
      setError("root.random", {
        type: "random",
        message: `User with email ${formData.email} is not found`,
      });
    }
  };
  return (
    <div className="bg-white p-6 border border-gray-300 mb-3 rounded-md">
      <form onSubmit={handleSubmit(submitForm)}>
        {/* Username/Email Field */}
        <Field error={errors.username}>
          <input
            type="text"
            name="email"
            id="email"
            className="form-input"
            placeholder="Enter your email"
            {...register("email", { required: "Email is required" })}
          />
        </Field>

        {/* Password Field */}

        <Field error={errors.password}>
          <div className="relative m-0 p-0">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              id="password"
              className="form-input"
              placeholder="Password"
              {...register("password", { required: "Password is required" })}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 text-xs cursor-pointer"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
        </Field>

        <small className="text-red-600 m-0 p-0">
          {errors.root?.random?.message}
        </small>

        {/* Login Button */}
        <div className="mb-4">
          <button type="submit" className="login-button cursor-pointer">
            Log in
          </button>
        </div>

        {/* OR Separator */}
        <div className="or-separator">OR</div>

        <div className="mb-4">
          <button type="submit" className="login-button">
            Log in with Google
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
