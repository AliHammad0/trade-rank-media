import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import AdminSidebar from "../Components/AdminSidebar";

const API_URL = "https://trade-rank-media-hammad.vercel.app/api/v1";

const CreateService = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: "",
    category: "",
    slug: "",
    features: [],
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const addFeature = () => {
    setFormData({
      ...formData,
      features: [
        ...formData.features,
        { title: "", description: "" },
      ],
    });
  };

  const handleFeatureChange = (index, e) => {
    const updatedFeatures = [...formData.features];
    updatedFeatures[index][e.target.name] = e.target.value;

    setFormData({
      ...formData,
      features: updatedFeatures,
    });
  };

  const removeFeature = (index) => {
    setFormData({
      ...formData,
      features: formData.features.filter(
        (_, featureIndex) => featureIndex !== index
      ),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const token = localStorage.getItem("token");

      const response = await axios.post(
        `${API_URL}/service/create`,
        formData,
        {
          headers: token
            ? { Authorization: `Bearer ${token}` }
            : {},
        }
      );

      if (response.data.ok) {
        alert("Service created successfully!");

        setFormData({
          title: "",
          description: "",
          image: "",
          category: "",
          slug: "",
          features: [],
        });

        navigate("/admin/services");
      } else {
        alert(response.data.message || "Failed to create service");
      }
    } catch (error) {
      console.log("Create Service Error:", error);
      alert(
        error.response?.data?.message ||
          "Failed to create service"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100">
      <AdminSidebar />

      <main className="ml-0 md:ml-64 p-4 sm:p-6 md:p-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">
          Create Service
        </h1>

        <p className="text-slate-500 mt-2">
          Add a new service to your website.
        </p>

        <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6 md:p-8 mt-6 md:mt-8 w-full max-w-3xl">
          <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
            <div>
              <label className="block font-medium mb-2">Service Title</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Enter service title"
                className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block font-medium mb-2">Category</label>
              <input
                type="text"
                name="category"
                value={formData.category}
                onChange={handleChange}
                placeholder="e.g. SEO, Web Development"
                className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block font-medium mb-2">Slug</label>
              <input
                type="text"
                name="slug"
                value={formData.slug}
                onChange={handleChange}
                placeholder="e.g. search-engine-optimisation"
                className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block font-medium mb-2">Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Enter service description"
                rows="5"
                className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block font-medium mb-2">Image URL</label>
              <input
                type="text"
                name="image"
                value={formData.image}
                onChange={handleChange}
                placeholder="Enter image URL"
                className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className="border-t border-slate-200 pt-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
                <div>
                  <h2 className="text-lg font-bold text-slate-900">
                    Service Features
                  </h2>
                  <p className="text-sm text-slate-500 mt-1">
                    Add different titles and descriptions for this service.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={addFeature}
                  className="bg-slate-900 hover:bg-slate-800 text-white px-4 py-2 rounded-lg font-medium transition w-full sm:w-auto"
                >
                  + Add Feature
                </button>
              </div>

              <div className="space-y-5">
                {formData.features.map((feature, index) => (
                  <div
                    key={index}
                    className="border border-slate-200 rounded-xl p-4 sm:p-5 bg-slate-50"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-semibold text-slate-800">
                        Feature {index + 1}
                      </h3>
                      <button
                        type="button"
                        onClick={() => removeFeature(index)}
                        className="text-red-600 hover:text-red-700 font-medium"
                      >
                        Remove
                      </button>
                    </div>

                    <div className="mb-4">
                      <label className="block font-medium mb-2">
                        Feature Title
                      </label>
                      <input
                        type="text"
                        name="title"
                        value={feature.title}
                        onChange={(e) => handleFeatureChange(index, e)}
                        placeholder="e.g. Professional Strategy"
                        className="w-full border border-slate-300 rounded-lg px-4 py-3 bg-white outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>

                    <div>
                      <label className="block font-medium mb-2">
                        Feature Description
                      </label>
                      <textarea
                        name="description"
                        value={feature.description}
                        onChange={(e) => handleFeatureChange(index, e)}
                        placeholder="Enter feature description"
                        rows="3"
                        className="w-full border border-slate-300 rounded-lg px-4 py-3 bg-white outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                  </div>
                ))}
              </div>

              {formData.features.length === 0 && (
                <div className="border border-dashed border-slate-300 rounded-xl p-6 text-center">
                  <p className="text-slate-500">No features added yet.</p>
                  <p className="text-sm text-slate-400 mt-1">
                    Click "+ Add Feature" to add service features.
                  </p>
                </div>
              )}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 text-white px-6 py-3 rounded-lg font-semibold transition w-full sm:w-auto"
            >
              {loading ? "Creating..." : "Create Service"}
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default CreateService;