import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const AdminRoute = ({ children }) => {
  const location = useLocation();

  // LocalStorage se user nikalna
  const user = JSON.parse(localStorage.getItem("user"));

  // User login nahi hai
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // User admin nahi hai
  if (user.isAdmin !== true) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-100 px-4">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
          <div className="text-6xl mb-4">
            🚫
          </div>

          <h1 className="text-2xl font-bold text-red-600 mb-3">
            Access Denied
          </h1>

          <p className="text-gray-600 mb-6">
            You are not Admin, so you cannot access Admin Dashboard.
          </p>

          <button
            onClick={() => window.history.back()}
            className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  // Admin hai
  return children;
};

export default AdminRoute;