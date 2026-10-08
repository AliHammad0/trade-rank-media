import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  // ==============================
  // HANDLE INPUT CHANGE
  // ==============================
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // ==============================
  // LOGIN
  // ==============================
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await axios.post(
        "http://localhost:8080/api/v1/users/login",
        {
          email: formData.email.trim().toLowerCase(),
          password: formData.password,
        }
      );

      console.log("LOGIN RESPONSE:", response.data);

      if (response.data.ok) {
        // ==============================
        // SAVE TOKEN
        // ==============================
        localStorage.setItem(
          "token",
          response.data.token
        );

        // ==============================
        // SAVE USER
        // ==============================
        localStorage.setItem(
          "user",
          JSON.stringify(response.data.user)
        );

        // ==============================
        // HEADER UPDATE WITHOUT REFRESH
        // ==============================
        window.dispatchEvent(
          new Event("userLoggedIn")
        );

        alert(
          response.data.message || "Login successful"
        );

        // ==============================
        // GO HOME
        // ==============================
        navigate("/");
      } else {
        alert(
          response.data.error ||
          response.data.message ||
          "Login failed"
        );
      }

    } catch (error) {
      console.log("LOGIN ERROR:", error);

      console.log(
        "BACKEND RESPONSE:",
        error.response?.data
      );

      alert(
        error.response?.data?.error ||
        error.response?.data?.message ||
        "Invalid email or password"
      );

    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white flex items-center justify-center px-5 py-16">

      <div className="w-full max-w-md">

        {/* ==============================
            LOGO
        ============================== */}
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

        {/* ==============================
            CARD
        ============================== */}
        <div className="bg-slate-900/80 backdrop-blur-xl border border-blue-500/20 rounded-3xl p-7 shadow-2xl">

          <form
            onSubmit={handleSubmit}
            className="space-y-5"
          >

            {/* ==============================
                EMAIL
            ============================== */}
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
                required
                autoComplete="email"
                className="
                  w-full
                  px-4 py-3.5
                  rounded-xl
                  bg-slate-950
                  border border-slate-700
                  text-white
                  placeholder-gray-500
                  outline-none
                  focus:border-blue-500
                  focus:ring-2
                  focus:ring-blue-500/20
                  transition
                "
              />

            </div>

            {/* ==============================
                PASSWORD
            ============================== */}
            <div>

              <label className="block text-sm text-gray-300 mb-2">
                Password
              </label>

              <div className="relative">

                <input
                  type={
                    showPassword
                      ? "text"
                      : "password"
                  }
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  required
                  autoComplete="current-password"
                  className="
                    w-full
                    px-4 py-3.5 pr-16
                    rounded-xl
                    bg-slate-950
                    border border-slate-700
                    text-white
                    placeholder-gray-500
                    outline-none
                    focus:border-blue-500
                    focus:ring-2
                    focus:ring-blue-500/20
                    transition
                  "
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                  className="
                    absolute
                    right-3
                    top-1/2
                    -translate-y-1/2
                    text-sm
                    text-blue-400
                    hover:text-cyan-400
                  "
                >
                  {showPassword
                    ? "Hide"
                    : "Show"}
                </button>

              </div>

            </div>

            {/* ==============================
                FORGOT PASSWORD
            ============================== */}
            <div className="flex justify-end">

              <Link
                to="/forgot-password"
                className="
                  text-sm
                  text-blue-400
                  hover:text-cyan-400
                  transition
                "
              >
                Forgot Password?
              </Link>

            </div>

            {/* ==============================
                LOGIN BUTTON
            ============================== */}
            <button
              type="submit"
              disabled={loading}
              className="
                w-full
                py-3.5
                rounded-xl
                bg-gradient-to-r
                from-blue-600
                to-cyan-500
                font-semibold
                shadow-lg
                shadow-blue-600/20
                hover:scale-[1.02]
                active:scale-[0.98]
                transition-all
                disabled:opacity-60
                disabled:cursor-not-allowed
              "
            >
              {loading
                ? "Logging in..."
                : "Login"}
            </button>

          </form>

          {/* ==============================
              SIGNUP
          ============================== */}
          <div className="text-center mt-7 text-gray-400">

            Don't have an account?{" "}

            <Link
              to="/signup"
              className="
                text-blue-400
                hover:text-cyan-400
                font-semibold
              "
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