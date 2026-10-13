
import mongoose from "mongoose";
import dns from "node:dns";
import { MONGO } from "./config.js";

dns.setServers(["8.8.8.8", "8.8.4.4"]);

const DBCONFIG = async () => {
  try {
    if (mongoose.connection.readyState === 1) {
      return;
    }

    await mongoose.connect(MONGO, {
      serverSelectionTimeoutMS: 10000,
    });

    console.log("MongoDB connected successfully");
  } catch (error) {
    console.log("MongoDB connection error:", error.message);
    throw error;
  }
};

export default DBCONFIG;
