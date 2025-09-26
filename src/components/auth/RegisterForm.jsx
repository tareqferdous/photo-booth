import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import UserCreationModal from "../../modals/UserCreationModal";
import Field from "../common/Field";

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [registerData, setRegisterData] = useState(null);
  const [isCreated, setIsCreated] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setError,
  } = useForm();

  const { setAuth } = useAuth();
  const navigate = useNavigate();

  const password = watch("password", ""); // to compare with confirm password

  const submitForm = async (formData) => {
    delete formData.confirmPassword;
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_BASE_URL}/auth/signup`,
        formData
      );
      if (response.status === 201) {
        const { user, accessToken, refreshToken } = response.data;
        if (user && accessToken && refreshToken) {
          setAuth({ user, accessToken, refreshToken });
          setTimeout(() => {
            navigate("/edit-profile", { replace: true });
          }, 100);
        }
      }
    } catch (error) {
      console.log(error);
      setError("root.random", {
        type: "random",
        message: error.message,
      });
    }
  };

  return (
    <div className="bg-white p-6 border border-gray-300 mb-3">
      {/* Headline */}
      <h2 className="text-center font-semibold text-gray-500 text-lg mb-4">
        Sign up to see photos and videos from your friends.
      </h2>

      <form onSubmit={handleSubmit(submitForm)}>
        <Field className="relative">
          <input
            type="email"
            name="email"
            id="email"
            className="form-input"
            placeholder="Email"
            {...register("email", { required: "Email is required" })}
          />
        </Field>

        <Field error={errors.fullName}>
          <input
            type="text"
            name="name"
            id="name"
            className="form-input"
            placeholder="Full Name"
            {...register("name", { required: "Full Name is required" })}
          />
        </Field>

        {/* Password Field */}
        <Field error={errors.password}>
          <div className="relative m-0 p-0">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              className="form-input"
              placeholder="Password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
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

        {/* Confirm Password Field */}
        <Field error={errors.confirmPassword}>
          <div className="relative m-0 p-0">
            <input
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              className="form-input"
              placeholder="Confirm Password"
              {...register("confirmPassword", {
                required: "Confirm Password is required",
                validate: (value) =>
                  value === password || "Passwords do not match",
              })}
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 text-xs cursor-pointer"
            >
              {showConfirmPassword ? "Hide" : "Show"}
            </button>
          </div>
        </Field>

        <small className="text-red-600 m-0 p-0">
          {errors.root?.random?.message}
        </small>

        {/* Sign Up Button */}
        <div className="mb-2">
          <button type="submit" className="login-button">
            Sign up
          </button>
        </div>
      </form>
      {isCreated && (
        <UserCreationModal
          navigate={navigate}
          setAuth={setAuth}
          registerData={registerData}
        />
      )}
    </div>
  );
};

export default RegisterForm;
