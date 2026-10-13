
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const API_URL =
  "https://trade-rank-media-hammad.vercel.app/api/v1";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;

    if (!formData.email.trim() || !formData.password) {
      toast.error("Please enter your email and password!");
      return;
    }

    try {
      setLoading(true);

      const response = await axios.post(
        `${API_URL}/users/login`,
        {
          email: formData.email.trim().toLowerCase(),
          password: formData.password,
        }
      );

      console.log("LOGIN RESPONSE:", response.data);

      if (response.data.ok && response.data.token) {
        localStorage.setItem("token", response.data.token);

        localStorage.setItem(
          "user",
          JSON.stringify(response.data.user)
        );

        window.dispatchEvent(new Event("userLoggedIn"));

        toast.success(
          response.data.message || "Login successful!"
        );

        navigate("/");
      } else {
        toast.error(
          response.data.error ||
            response.data.message ||
            "Login failed. Please check your credentials."
        );
      }
    } catch (error) {
      console.error("LOGIN ERROR:", error);

      const status = error.response?.status;
      const backendData = error.response?.data;

      let errorMessage;

      if (!error.response) {
        errorMessage =
          "Unable to connect to the server. Please try again.";
      } else if (status === 400 || status === 401) {
        errorMessage =
          backendData?.error ||
          backendData?.message ||
          "Invalid email or password.";
      } else if (status === 403) {
        errorMessage =
          backendData?.error ||
          backendData?.message ||
          "Access denied. Please check your account.";
      } else if (status === 404) {
        errorMessage =
          backendData?.error ||
          backendData?.message ||
          "Login service not found.";
      } else if (status >= 500) {
        errorMessage =
          backendData?.error ||
          backendData?.message ||
          "Server error. Please try again later.";
      } else {
        errorMessage =
          backendData?.error ||
          backendData?.message ||
          "Something went wrong. Please try again.";
      }

      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white flex items-center justify-center px-5 py-16">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="mx-auto w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400 p-[2px] shadow-xl shadow-blue-500/30">
            <div className="w-full h-full rounded-2xl bg-slate-950 flex items-center justify-center">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1006/1006363.png"
                alt="Logo"
                className="w-9 h-9"
              />
            </div>
          </div>

          <h1 className="text-3xl font-bold mt-5">
            Welcome Back
          </h1>

          <p className="text-gray-400 mt-2">
            Login to your Trade Rank Media account
          </p>
        </div>

        <div className="bg-slate-900/80 backdrop-blur-xl border border-blue-500/20 rounded-3xl p-7 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm text-gray-300 mb-2">
                Email Address
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                autoComplete="email"
                className="w-full px-4 py-3.5 rounded-xl bg-slate-950 border border-slate-700 text-white placeholder-gray-500 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-300 mb-2">
                Password
              </label>

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  autoComplete="current-password"
                  className="w-full px-4 py-3.5 pr-16 rounded-xl bg-slate-950 border border-slate-700 text-white placeholder-gray-500 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-blue-400 hover:text-cyan-400"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            <div className="flex justify-end">
              <Link
                to="/forgot-password"
                className="text-sm text-blue-400 hover:text-cyan-400 transition"
              >
                Forgot Password?
              </Link>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 font-semibold shadow-lg shadow-blue-600/20 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>

          <div className="text-center mt-7 text-gray-400">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="text-blue-400 hover:text-cyan-400 font-semibold"
            >
              Create Account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
