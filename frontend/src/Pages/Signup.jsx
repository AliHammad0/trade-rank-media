
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const API_URL =
  "https://trade-rank-media-hammad.vercel.app/api/v1";

const PreSignup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setError("");
    setMessage("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;

    setLoading(true);
    setError("");
    setMessage("");

    try {
      const response = await fetch(
        `${API_URL}/users/Pre-Signup`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: formData.email.trim().toLowerCase(),
            password: formData.password,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok || data.ok === false || data.error) {
        setError(
          data.error ||
            data.message ||
            "Unable to create account. Please try again."
        );
        return;
      }

      if (data.ok === true || data.message) {
        setMessage(
          data.message || "Verification email sent successfully!"
        );

        setFormData({
          email: "",
          password: "",
        });

        setTimeout(() => {
          navigate("/login");
        }, 3000);
      } else {
        setError("Unexpected server response. Please try again.");
      }
    } catch (error) {
      console.error("Pre Signup Error:", error);

      setError(
        "Unable to connect to server. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4 py-10 relative overflow-hidden">
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-pink-500/30 rounded-full blur-[120px]" />

      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-orange-500/30 rounded-full blur-[120px]" />

      <div className="relative w-full max-w-md">
        <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl shadow-2xl p-8">
          <div className="text-center mb-8">
            <div className="mx-auto mb-5 w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-500 to-orange-400 flex items-center justify-center shadow-lg shadow-pink-500/30">
              <span className="text-white text-2xl font-black">
                TR
              </span>
            </div>

            <h1 className="text-3xl font-bold text-white">
              Create Account
            </h1>

            <p className="text-gray-400 mt-2">
              Join Trade Rank Media today
            </p>
          </div>

          {error && (
            <div className="mb-5 rounded-xl border border-red-400/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
              {error}
            </div>
          )}

          {message && (
            <div className="mb-5 rounded-xl border border-green-400/30 bg-green-500/10 px-4 py-3 text-sm text-green-300">
              {message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Email Address
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
                disabled={loading}
                autoComplete="email"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-white placeholder-gray-500 outline-none transition focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20 disabled:opacity-50"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Password
              </label>

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Create a strong password"
                  required
                  disabled={loading}
                  autoComplete="new-password"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 pr-20 text-white placeholder-gray-500 outline-none transition focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20 disabled:opacity-50"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  disabled={loading}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-sm font-medium text-pink-400 hover:text-pink-300"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>

              <p className="text-xs text-gray-500 mt-2">
                Password must be at least 8 characters with uppercase,
                lowercase, number and special character.
              </p>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl bg-gradient-to-r from-pink-500 to-orange-400 py-3.5 font-bold text-white shadow-lg shadow-pink-500/20 transition hover:scale-[1.01] hover:shadow-pink-500/30 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading
                ? "Sending Verification Email..."
                : "Create Account"}
            </button>
          </form>

          <div className="text-center mt-7">
            <p className="text-gray-400 text-sm">
              Already have an account?{" "}
              <Link
                to="/login"
                className="font-semibold text-pink-400 hover:text-pink-300"
              >
                Login
              </Link>
            </p>
          </div>

          <div className="mt-7 pt-6 border-t border-white/10 text-center">
            <p className="text-xs leading-5 text-gray-500">
              After submitting your details, a verification link
              will be sent to your email address.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreSignup;
