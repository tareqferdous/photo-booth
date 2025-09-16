import { useForm } from "react-hook-form";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  const submitForm = (formData) => {
    console.log(formData);
  };
  return (
    <div className="bg-white p-6 border border-gray-300 mb-3 rounded-md">
      <form onSubmit={handleSubmit(submitForm)}>
        {/* Username/Email Field */}
        <div className="mb-3">
          <input
            type="text"
            name="username"
            className="form-input"
            placeholder="Phone number, username, or email"
            {...register("username", { required: "Username is required" })}
          />
        </div>

        {/* Password Field */}

        <div className="relative mb-3">
          <input
            type="password"
            name="password"
            className="form-input"
            placeholder="Password"
            {...register("password", { required: "Password is required" })}
          />
          <button
            type="button"
            className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 text-xs"
          >
            Show
          </button>
        </div>

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
