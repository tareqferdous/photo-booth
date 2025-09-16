import { useState } from "react";
import { useForm } from "react-hook-form";
import Field from "../common/Field";

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  const submitForm = (data) => {
    console.log(data);
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
            name="fullName"
            id="fullName"
            className="form-input"
            placeholder="Full Name"
            {...register("fullName", { required: "Full Name is required" })}
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

        {/* Sign Up Button */}
        <div className="mb-2">
          <button type="submit" className="login-button">
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
