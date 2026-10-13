import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import AdminSidebar from "../Components/AdminSidebar";

const AllServices = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState(null);

  // GET ALL SERVICES
  const getServices = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/api/v1/service/all"
      );

      if (response.data.ok) {
        setServices(response.data.services);
      }
    } catch (error) {
      console.log("Services API Error:", error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getServices();
  }, []);

  // DELETE SERVICE
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this service?"
    );

    if (!confirmDelete) {
      return;
    }

    try {
      setDeleting(id);

      const response = await axios.delete(
        `http://localhost:8080/api/v1/service/delete/${id}`
      );

      if (response.data.ok) {
        setServices((prevServices) =>
          prevServices.filter((service) => service._id !== id)
        );

        alert("Service deleted successfully");
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.log("Delete Service Error:", error.message);
      alert("Failed to delete service");
    } finally {
      setDeleting(null);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100">
      {/* SIDEBAR */}
      <AdminSidebar />

      {/* MAIN CONTENT */}
      <main className="ml-0 md:ml-64 p-4 sm:p-6 md:p-8">
        {/* HEADER */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">
              All Services
            </h1>

            <p className="text-slate-500 mt-2">
              Manage all your services.
            </p>
          </div>

          <Link
            to="/admin/create-service"
            className="
              bg-blue-600
              hover:bg-blue-700
              text-white
              px-5
              py-3
              rounded-lg
              font-semibold
              w-full
              sm:w-auto
              text-center
              transition
            "
          >
            + Create Service
          </Link>
        </div>

        {/* TABLE */}
        <div className="bg-white rounded-xl shadow-sm mt-6 md:mt-8 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[900px]">
              {/* TABLE HEADER */}
              <thead className="bg-slate-900 text-white">
                <tr>
                  <th className="text-left px-6 py-4">
                    Title
                  </th>

                  <th className="text-left px-6 py-4">
                    Category
                  </th>

                  <th className="text-left px-6 py-4">
                    Description
                  </th>

                  <th className="text-left px-6 py-4">
                    Status
                  </th>

                  <th className="text-left px-6 py-4">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody>
                {/* LOADING */}
                {loading && (
                  <tr>
                    <td
                      colSpan="5"
                      className="text-center py-10 text-slate-500"
                    >
                      Loading Services...
                    </td>
                  </tr>
                )}

                {/* EMPTY */}
                {!loading && services.length === 0 && (
                  <tr>
                    <td
                      colSpan="5"
                      className="text-center py-10 text-slate-500"
                    >
                      No Services Found
                    </td>
                  </tr>
                )}

                {/* SERVICES */}
                {!loading &&
                  services.map((service) => (
                    <tr
                      key={service._id}
                      className="
                        border-b
                        hover:bg-slate-50
                        transition
                      "
                    >
                      {/* TITLE */}
                      <td className="px-6 py-4 font-semibold text-slate-900">
                        {service.title}
                      </td>

                      {/* CATEGORY */}
                      <td className="px-6 py-4">
                        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
                          {service.category || "N/A"}
                        </span>
                      </td>

                      {/* DESCRIPTION */}
                      <td className="px-6 py-4 text-slate-600 max-w-md">
                        <p className="line-clamp-2">
                          {service.description}
                        </p>
                      </td>

                      {/* STATUS */}
                      <td className="px-6 py-4">
                        <span
                          className={`px-3 py-1 rounded-full text-sm font-semibold ${
                            service.isActive
                              ? "bg-green-100 text-green-700"
                              : "bg-red-100 text-red-700"
                          }`}
                        >
                          {service.isActive
                            ? "Active"
                            : "Inactive"}
                        </span>
                      </td>

                      {/* ACTION */}
                      <td className="px-6 py-4">
                        <div className="flex gap-2">
                          {/* EDIT */}
                          <Link
                            to={`/admin/update-service/${service._id}`}
                            className="
                              bg-blue-600
                              text-white
                              px-4
                              py-2
                              rounded-lg
                              hover:bg-blue-700
                              transition
                            "
                          >
                            Edit
                          </Link>

                          {/* DELETE */}
                          <button
                            onClick={() =>
                              handleDelete(service._id)
                            }
                            disabled={
                              deleting === service._id
                            }
                            className="
                              bg-red-600
                              text-white
                              px-4
                              py-2
                              rounded-lg
                              hover:bg-red-700
                              transition
                              disabled:opacity-50
                              disabled:cursor-not-allowed
                            "
                          >
                            {deleting === service._id
                              ? "Deleting..."
                              : "Delete"}
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AllServices;