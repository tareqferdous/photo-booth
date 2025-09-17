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

  const from = location?.state?.from || "/";

  const submitForm = (formData) => {
    const user = { ...formData };
    setAuth({ user });
    navigate(from);
  };
  return (
    <div className="bg-white p-6 border border-gray-300 mb-3 rounded-md">
      <form onSubmit={handleSubmit(submitForm)}>
        {/* Username/Email Field */}
        <Field error={errors.username}>
          <input
            type="text"
            name="username"
            id="username"
            className="form-input"
            placeholder="Phone number, username, or email"
            {...register("username", { required: "Username is required" })}
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

        {/* Login Button */}
        <div className="mb-4">
          <button type="submit" className="login-button">
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
