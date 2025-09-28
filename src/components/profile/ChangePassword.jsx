import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Field from "../common/Field";

const ChangePassword = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setError,
  } = useForm();
  const [passwordStrength, setPasswordStrength] = useState(0);

  const newPassword = watch("passwordNew"); // to compare with confirm password

  const calculateStrength = (password) => {
    let score = 0;
    if (!password) return 0;

    if (password.length >= 8) score++;
    if (/[a-z]/.test(password)) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;

    return Math.min(score, 4); // ৪ টা বারের বেশি না
  };

  useEffect(() => {
    const strength = calculateStrength(newPassword);
    setPasswordStrength(strength);
  }, [newPassword]);

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="bg-white rounded-lg p-6 mb-6">
      <h2 className="font-medium text-lg mb-4">Change Password</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Field label="Current Password" errors={errors.passwordCurrent}>
          <div className="relative">
            <input
              type="password"
              id="passwordCurrent"
              name="passwordCurrent"
              className="form-input pr-10"
              placeholder="Enter your current password"
              {...register("passwordCurrent", {
                required: "Current password is required",
              })}
            />
            <button className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 text-sm">
              Show
            </button>
          </div>
        </Field>

        <Field label="New Password" errors={errors.passwordNew}>
          <div className="relative">
            <input
              type="password"
              id="passwordNew"
              name="passwordNew"
              className="form-input pr-10 mb-1"
              placeholder="Enter new password"
              {...register("passwordNew", {
                required: "New password is required",
              })}
            />
            <button className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 text-sm">
              Show
            </button>
          </div>
        </Field>
        {/* Password Strength Indicator - */}
        <div className="flex w-full h-1 mb-1">
          <div
            className={`password-strength bg-red-500 w-1/4 ${
              passwordStrength >= 1 ? "opacity-100" : "opacity-30"
            }`}
          ></div>
          <div
            className={`password-strength bg-orange-500 w-1/4 ${
              passwordStrength >= 2 ? "opacity-100" : "opacity-30"
            }`}
          ></div>
          <div
            className={`password-strength bg-yellow-500 w-1/4 ${
              passwordStrength >= 3 ? "opacity-100" : "opacity-30"
            }`}
          ></div>
          <div
            className={`password-strength bg-green-500 w-1/4 ${
              passwordStrength >= 4 ? "opacity-100" : "opacity-30"
            }`}
          ></div>
        </div>
        <p className="text-xs text-gray-500 mb-3">
          For a strong password, use at least 8 characters with a mix of
          letters, numbers, and symbols.
        </p>

        {/* Confirm New Password  */}
        <Field label="Confirm New Password" errors={errors.passwordConfirm}>
          <div className="relative">
            <input
              type="password"
              id="passwordConfirm"
              name="passwordConfirm"
              className="form-input pr-10"
              placeholder="Confirm new password"
              {...register("passwordConfirm", {
                required: "Confirm new password is required",
              })}
            />
            <button className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 text-sm">
              Show
            </button>
          </div>
        </Field>
        {/* Password Change Button  */}
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-600 transition"
        >
          Change Password
        </button>

        <div className="mt-4 pt-4 border-t border-gray-200">
          <p className="text-xs text-gray-500">
            After changing your password, you'll be logged out of all devices
            except the ones you're using now.
          </p>
        </div>
      </form>
    </div>
  );
};

export default ChangePassword;
