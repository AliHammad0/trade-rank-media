
import mongoose from "mongoose";

const DBCONFIG = async () => {
  try {
    const MONGO = process.env.MONGO;

    if (!MONGO) {
      throw new Error("MONGO environment variable is missing");
    }

    await mongoose.connect(MONGO, {
      serverSelectionTimeoutMS: 5000,
    });

    console.log("MongoDB connected successfully");
  } catch (error) {
    console.log("MongoDB connection error:", error.message);
    throw error;
  }
};

export default DBCONFIG;
