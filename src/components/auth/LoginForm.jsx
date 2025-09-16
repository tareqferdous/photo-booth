import { useForm } from "react-hook-form";

const LoginForm = () => {
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
    <div className="bg-white p-6 border border-gray-300 mb-3 rounded-md">
      <form onSubmit={handleSubmit(submitForm)}>
        {/* Username/Email Field */}
        <div className="mb-3">
          <div className="relative">
            <input
              type="text"
              name="username"
              className="form-input"
              placeholder="Phone number, username, or email"
              aria-label="Phone number, username, or email"
              {...register("username", { required: "Username is required" })}
            />
          </div>
        </div>

        {/* Password Field */}
        <div className="mb-3">
          <div className="relative">
            <input
              type="password"
              name="password"
              className="form-input"
              placeholder="Password"
              aria-label="Password"
              {...register("password", { required: "Password is required" })}
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 text-xs"
            >
              Show
            </button>
          </div>
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
