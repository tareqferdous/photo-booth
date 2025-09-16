import { useForm } from "react-hook-form";

const RegisterForm = () => {
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
        {/* Email/Phone Field */}
        <div className="mb-2">
          <div className="relative">
            <input
              type="email"
              name="email"
              className="form-input"
              placeholder="Email"
              aria-label="Email"
              {...register("email", { required: "Email is required" })}
            />
          </div>
        </div>

        {/* Full Name Field */}
        <div className="mb-2">
          <div className="relative">
            <input
              type="text"
              name="fullName"
              className="form-input"
              placeholder="Full Name"
              aria-label="Full Name"
              {...register("fullName", { required: "Full Name is required" })}
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

        {/* Confirm Password Field */}
        <div className="mb-3">
          <div className="relative">
            <input
              type="password"
              name="confirmPassword"
              className="form-input"
              placeholder="Confirm Password"
              aria-label="Confirm Password"
              {...register("confirmPassword", {
                required: "Confirm Password is required",
              })}
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 text-xs"
            >
              Show
            </button>
          </div>
        </div>

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
