import React, { useEffect, useState } from "react";
import axios from "axios";
import AdminSidebar from "../Components/AdminSidebar";

const API_URL = "https://trade-rank-media-hammad.vercel.app/api/v1";

const Dashboard = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getServices = async () => {
      try {
        const response = await axios.get(`${API_URL}/service/all`);

        if (response.data.ok) {
          setServices(response.data.services || []);
        }
      } catch (error) {
        console.log(
          "Dashboard Services Error:",
          error.response?.data || error.message
        );
      } finally {
        setLoading(false);
      }
    };

    getServices();
  }, []);

  const totalServices = services.length;

  const activeServices = services.filter(
    (service) => service.isActive === true
  ).length;

  const inactiveServices = services.filter(
    (service) => service.isActive === false
  ).length;

  return (
    <div className="min-h-screen bg-slate-100">
      <AdminSidebar />

      <main className="ml-0 md:ml-64 p-4 sm:p-6 md:p-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">
          Dashboard
        </h1>

        <p className="text-slate-500 mt-2">
          Welcome to your admin dashboard.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mt-6 md:mt-8">
          <div className="bg-white p-5 sm:p-6 rounded-xl shadow-sm">
            <p className="text-slate-500">Total Services</p>
            <h2 className="text-3xl font-bold mt-2">
              {loading ? "..." : totalServices}
            </h2>
          </div>

          <div className="bg-white p-5 sm:p-6 rounded-xl shadow-sm">
            <p className="text-slate-500">Active Services</p>
            <h2 className="text-3xl font-bold mt-2 text-green-600">
              {loading ? "..." : activeServices}
            </h2>
          </div>

          <div className="bg-white p-5 sm:p-6 rounded-xl shadow-sm">
            <p className="text-slate-500">Inactive Services</p>
            <h2 className="text-3xl font-bold mt-2 text-red-600">
              {loading ? "..." : inactiveServices}
            </h2>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;