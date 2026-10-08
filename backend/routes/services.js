import express from "express";
import * as Service from "../controller/services.js";
import { requiredAdmin } from "../middleware/requiredAdmin.js";

const serviceroutes = express.Router();

// =========================
// Public Routes
// =========================

// Get all services
serviceroutes
  .route("/all")
  .get(Service.getAllServices);

// Get single service
serviceroutes
  .route("/single/:id")
  .get(Service.getSingleService);


// =========================
// Admin Only Routes
// =========================

// Create service
serviceroutes
  .route("/create")
  .post( Service.createService);

// Update service
serviceroutes
  .route("/update/:id")
  .put( Service.updateService);

// Delete service
serviceroutes
  .route("/delete/:id")
  .delete( Service.deleteService);


export default serviceroutes;