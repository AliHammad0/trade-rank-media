import mongoose from "mongoose";
import { MONGO } from "./config.js";

const DBCONFIG = async () => {
  try {
    await mongoose.connect(MONGO, {
      serverSelectionTimeoutMS: 5000,
    });

    console.log("✅ MongoDB connected successfully");
  } catch (error) {
    console.log("❌ MongoDB connection error:", error.message);
  }
};

export default DBCONFIG;