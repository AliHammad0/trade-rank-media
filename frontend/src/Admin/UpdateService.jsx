import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import AdminSidebar from "../Components/AdminSidebar";

const API_URL = "https://trade-rank-media-hammad.vercel.app/api/v1";

const UpdateService = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: "",
    category: "",
    slug: "",
    isActive: true,
    features: [],
  });

  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);

  useEffect(() => {
    const getService = async () => {
      try {
        const response = await axios.get(
          `${API_URL}/service/single/${id}`
        );

        if (response.data.ok) {
          const service = response.data.service;

          setFormData({
            title: service.title || "",
            description: service.description || "",
            image: service.image || "",
            category: service.category || "",
            slug: service.slug || "",
            isActive: service.isActive !== undefined
              ? service.isActive
              : true,
            features: service.features || [],
          });
        } else {
          alert(response.data.message || "Service not found");
        }
      } catch (error) {
        console.log("Get Service Error:", error);
        alert(error.response?.data?.message || "Failed to load service");
      } finally {
        setLoading(false);
      }
    };

    getService();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleStatus = (e) => {
    setFormData((prev) => ({
      ...prev,
      isActive: e.target.value === "true",
    }));
  };

  const addFeature = () => {
    setFormData((prev) => ({
      ...prev,
      features: [
        ...prev.features,
        { title: "", description: "" },
      ],
    }));
  };

  const handleFeatureChange = (index, e) => {
    const { name, value } = e.target;

    setFormData((prev) => {
      const updatedFeatures = [...prev.features];

      updatedFeatures[index] = {
        ...updatedFeatures[index],
        [name]: value,
      };

      return {
        ...prev,
        features: updatedFeatures,
      };
    });
  };

  const removeFeature = (index) => {
    setFormData((prev) => ({
      ...prev,
      features: prev.features.filter(
        (_, featureIndex) => featureIndex !== index
      ),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setUpdating(true);

      const token = localStorage.getItem("token");

      const response = await axios.put(
        `${API_URL}/service/update/${id}`,
        formData,
        {
          headers: token
            ? { Authorization: `Bearer ${token}` }
            : {},
        }
      );

      if (response.data.ok) {
        alert("Service updated successfully");
        navigate("/admin/services");
      } else {
        alert(response.data.message || "Failed to update service");
      }
    } catch (error) {
      console.log("Update Service Error:", error);

      alert(
        error.response?.data?.message || "Failed to update service"
      );
    } finally {
      setUpdating(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-100">
        <AdminSidebar />
        <main className="ml-0 md:ml-64 p-6">
          <div className="flex justify-center items-center min-h-[60vh]">
            <h2 className="text-xl font-bold text-slate-600">
              Loading Service...
            </h2>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100">
      <AdminSidebar />

      <main className="ml-0 md:ml-64 p-4 sm:p-6 md:p-8">
        <div className="max-w-3xl mx-auto">
          <div className="mb-6">
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Update Service
            </h1>
            <p className="text-slate-500 mt-2">
              Update your service information and features.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl shadow-sm p-5 sm:p-8"
          >
            <div className="mb-5">
              <label className="block font-semibold text-slate-700 mb-2">
                Service Title
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Enter service title"
                required
                className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            <div className="mb-5">
              <label className="block font-semibold text-slate-700 mb-2">
                Category
              </label>
              <input
                type="text"
                name="category"
                value={formData.category}
                onChange={handleChange}
                placeholder="Enter category"
                required
                className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            <div className="mb-5">
              <label className="block font-semibold text-slate-700 mb-2">
                Slug
              </label>
              <input
                type="text"
                name="slug"
                value={formData.slug}
                onChange={handleChange}
                placeholder="service-slug"
                className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            <div className="mb-5">
              <label className="block font-semibold text-slate-700 mb-2">
                Image URL
              </label>
              <input
                type="text"
                name="image"
                value={formData.image}
                onChange={handleChange}
                placeholder="https://example.com/image.jpg"
                className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            <div className="mb-6">
              <label className="block font-semibold text-slate-700 mb-2">
                Description
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Enter service description"
                rows="6"
                required
                className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none resize-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            <div className="border-t border-slate-200 pt-6 mb-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-5">
                <div>
                  <h2 className="text-xl font-bold text-slate-900">
                    Service Features
                  </h2>
                  <p className="text-sm text-slate-500 mt-1">
                    Edit existing features or add new ones.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={addFeature}
                  className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 text-white px-4 py-2 rounded-lg font-semibold transition"
                >
                  + Add Feature
                </button>
              </div>

              <div className="space-y-5">
                {formData.features.map((feature, index) => (
                  <div
                    key={feature._id || index}
                    className="border border-slate-200 rounded-xl p-4 sm:p-5 bg-slate-50"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-bold text-slate-800">
                        Feature {index + 1}
                      </h3>
                      <button
                        type="button"
                        onClick={() => removeFeature(index)}
                        className="text-red-600 hover:text-red-700 font-semibold"
                      >
                        Remove
                      </button>
                    </div>

                    <div className="mb-4">
                      <label className="block font-semibold text-slate-700 mb-2">
                        Feature Title
                      </label>
                      <input
                        type="text"
                        name="title"
                        value={feature.title || ""}
                        onChange={(e) => handleFeatureChange(index, e)}
                        placeholder="e.g. Professional Strategy"
                        required
                        className="w-full border border-slate-300 rounded-lg px-4 py-3 bg-white outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                      />
                    </div>

                    <div>
                      <label className="block font-semibold text-slate-700 mb-2">
                        Feature Description
                      </label>
                      <textarea
                        name="description"
                        value={feature.description || ""}
                        onChange={(e) => handleFeatureChange(index, e)}
                        placeholder="Enter feature description"
                        rows="3"
                        required
                        className="w-full border border-slate-300 rounded-lg px-4 py-3 bg-white outline-none resize-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                      />
                    </div>
                  </div>
                ))}
              </div>

              {formData.features.length === 0 && (
                <div className="border border-dashed border-slate-300 rounded-xl p-6 text-center">
                  <p className="text-slate-500 font-medium">
                    No features added yet.
                  </p>
                  <p className="text-sm text-slate-400 mt-1">
                    Click "+ Add Feature" to add features.
                  </p>
                </div>
              )}
            </div>

            <div className="mb-6">
              <label className="block font-semibold text-slate-700 mb-2">
                Status
              </label>
              <select
                value={String(formData.isActive)}
                onChange={handleStatus}
                className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none focus:border-blue-600"
              >
                <option value="true">Active</option>
                <option value="false">Inactive</option>
              </select>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                type="submit"
                disabled={updating}
                className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 text-white px-6 py-3 rounded-lg font-semibold transition"
              >
                {updating ? "Updating..." : "Update Service"}
              </button>

              <button
                type="button"
                onClick={() => navigate("/admin/services")}
                className="w-full sm:w-auto bg-slate-200 hover:bg-slate-300 text-slate-800 px-6 py-3 rounded-lg font-semibold transition"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default UpdateService;