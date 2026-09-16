
import { useState } from "react";
import {
  Eye,
  EyeOff,
  LockKeyhole,
  User,
  ArrowRight,
} from "lucide-react";

const AdminLogin = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  // Handle input
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Submit login
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Admin Login Data:", formData);
  };

  // Forgot password
  const handleForgotPassword = () => {
    console.log("Forgot password:", formData.username);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md">

        {/* Login Card */}
        <div className="rounded-2xl bg-white p-6 shadow-xl sm:p-8">

          {/* Header */}
          <div className="mb-8 text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 text-blue-600">
              <LockKeyhole size={26} />
            </div>

            <h1 className="text-3xl font-bold text-gray-900">
              Admin Login
            </h1>

            <p className="mt-2 text-sm text-gray-500">
              Login to access the admin dashboard
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Username */}
            <div>
              <label
                htmlFor="username"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Username
              </label>

              <div className="relative">
                <User
                  size={19}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  id="username"
                  name="username"
                  type="text"
                  value={formData.username}
                  onChange={handleChange}
                  placeholder="Enter username"
                  required
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pl-10 pr-4 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Password
              </label>

              <div className="relative">
                <LockKeyhole
                  size={19}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter password"
                  required
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pl-10 pr-11 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? (
                    <EyeOff size={19} />
                  ) : (
                    <Eye size={19} />
                  )}
                </button>
              </div>
            </div>

            {/* Forgot Password */}
            <div className="flex justify-end">
              <button
                type="button"
                onClick={handleForgotPassword}
                className="text-sm font-medium text-blue-600 hover:underline"
              >
                Forgot password?
              </button>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="group flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700 active:scale-[0.98]"
            >
              Login

              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
