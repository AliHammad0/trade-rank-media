import React, { useEffect, useRef, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const API_URL = "https://trade-rank-media-hammad.vercel.app/api/v1";

const ActiveAccount = () => {
  const { token } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [success, setSuccess] = useState(false);
  const [status, setStatus] = useState("");

  const activatedRef = useRef(false);

  useEffect(() => {
    let redirectTimer;

    if (activatedRef.current) return;

    activatedRef.current = true;

    const activateAccount = async () => {
      try {
        if (!token) {
          setSuccess(false);
          setStatus("Invalid verification link.");
          return;
        }

        const response = await axios.post(
          `${API_URL}/users/signup`,
          { token }
        );

        const data = response.data;

        console.log("Account Activation Response:", data);

        if (data.ok === true) {
          setSuccess(true);
          setStatus(
            data.message ||
              "Your account has been successfully created!"
          );

          if (data.token) {
            localStorage.setItem("token", data.token);
          }

          if (data.user) {
            localStorage.setItem(
              "user",
              JSON.stringify(data.user)
            );
          }

          redirectTimer = setTimeout(() => {
            navigate("/login");
          }, 3000);
        } else {
          setSuccess(false);
          setStatus(
            data.message ||
              data.error ||
              "Account activation failed."
          );
        }
      } catch (error) {
        console.error(
          "Account Activation Error:",
          error.response?.data || error.message
        );

        setSuccess(false);
        setStatus(
          error.response?.data?.message ||
            error.response?.data?.error ||
            "Account activation failed. Please try again."
        );
      } finally {
        setLoading(false);
      }
    };

    activateAccount();

    return () => {
      if (redirectTimer) {
        clearTimeout(redirectTimer);
      }
    };
  }, [token, navigate]);

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4 relative overflow-hidden">
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-pink-500/30 rounded-full blur-[120px]" />

      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-orange-500/30 rounded-full blur-[120px]" />

      <div className="relative w-full max-w-md">
        <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl shadow-2xl p-8 text-center">
          {loading && (
            <>
              <div className="mx-auto mb-6 w-20 h-20 rounded-full bg-pink-500/10 flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-4 border-white/10 border-t-pink-500 border-r-orange-400" />
              </div>

              <h1 className="text-2xl font-bold text-white mb-3">
                Creating Account
              </h1>

              <p className="text-gray-400">
                Please wait while we verify your email and create
                your account...
              </p>
            </>
          )}

          {!loading && success && (
            <>
              <div className="mx-auto mb-6 w-20 h-20 rounded-full bg-green-500/10 border border-green-400/20 flex items-center justify-center">
                <svg
                  className="w-10 h-10 text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>

              <h1 className="text-2xl font-bold text-white mb-3">
                Account Created!
              </h1>

              <p className="text-green-400 mb-3">{status}</p>

              <p className="text-gray-500 text-sm">
                Redirecting you to login in 3 seconds...
              </p>
            </>
          )}

          {!loading && !success && (
            <>
              <div className="mx-auto mb-6 w-20 h-20 rounded-full bg-red-500/10 border border-red-400/20 flex items-center justify-center">
                <svg
                  className="w-10 h-10 text-red-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>

              <h1 className="text-2xl font-bold text-white mb-3">
                Activation Failed
              </h1>

              <p className="text-red-400 mb-6">{status}</p>

              <button
                onClick={() => navigate("/signup")}
                className="w-full rounded-xl bg-gradient-to-r from-pink-500 to-orange-400 py-3 font-bold text-white transition hover:scale-[1.01]"
              >
                Back to Signup
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ActiveAccount;