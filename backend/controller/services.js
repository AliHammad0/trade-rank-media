
import Service from "../model/services.js";

// =========================
// Add Service
// =========================
export const createService = async (req, res) => {
  try {
    const {
      title,
      description,
      image,
      category,
      slug,
      features,
    } = req.body;

    if (!title || !description || !image || !category || !slug) {
      return res.json({
        ok: false,
        message: "All fields are required",
      });
    }

    const existingService = await Service.findOne({ slug });

    if (existingService) {
      return res.json({
        ok: false,
        message: "Service already exists",
      });
    }

    const service = await Service.create({
      title,
      description,
      image,
      category,
      slug,
      features: features || [],
    });

    return res.json({
      ok: true,
      message: "Service created successfully",
      service,
    });
  } catch (error) {
    return res.json({
      ok: false,
      message: error.message,
    });
  }
};

// =========================
// Get All Services
// =========================
export const getAllServices = async (req, res) => {
  try {
    const services = await Service.find({ isActive: true }).sort({
      createdAt: -1,
    });

    return res.json({
      ok: true,
      message: "Services fetched successfully",
      total: services.length,
      services,
    });
  } catch (error) {
    return res.json({
      ok: false,
      message: error.message,
    });
  }
};

// =========================
// Get Single Service
// =========================
export const getSingleService = async (req, res) => {
  try {
    const { id } = req.params;

    const service = await Service.findById(id);

    if (!service) {
      return res.json({
        ok: false,
        message: "Service not found",
      });
    }

    return res.json({
      ok: true,
      message: "Service fetched successfully",
      service,
    });
  } catch (error) {
    return res.json({
      ok: false,
      message: error.message,
    });
  }
};

// =========================
// UPDATE SERVICE
// =========================
export const updateService = async (req, res) => {
  try {
    const { id } = req.params;

    const {
      title,
      description,
      image,
      category,
      slug,
      features,
      isActive,
    } = req.body;

    // =========================
    // CHECK SERVICE
    // =========================
    const existingService = await Service.findById(id);

    if (!existingService) {
      return res.json({
        ok: false,
        message: "Service not found",
      });
    }

    // =========================
    // UPDATE SERVICE
    // =========================
    const service = await Service.findByIdAndUpdate(
      id,
      {
        title,
        description,
        image,
        category,
        slug,

        // Save updated features
        features: Array.isArray(features) ? features : [],

        // Preserve boolean value
        isActive:
          typeof isActive === "boolean"
            ? isActive
            : existingService.isActive,
      },
      {
        new: true,
        runValidators: true,
      }
    );

    return res.json({
      ok: true,
      message: "Service updated successfully",
      service,
    });
  } catch (error) {
    console.log("Update Service Error:", error);

    return res.json({
      ok: false,
      message: error.message,
    });
  }
};



// =========================
// DELETE SERVICE
// =========================
export const deleteService = async (req, res) => {
  try {
    const { id } = req.params;

    const service = await Service.findByIdAndDelete(id);

    if (!service) {
      return res.json({
        ok: false,
        message: "Service not found",
      });
    }

    return res.json({
      ok: true,
      message: "Service deleted successfully",
    });
  } catch (error) {
    return res.json({
      ok: false,
      message: error.message,
    });
  }
};

