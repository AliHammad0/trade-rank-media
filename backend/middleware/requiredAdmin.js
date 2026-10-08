import jwt from "jsonwebtoken";
import User from "../model/users.js";
import * as config from "../config/config.js";

export const requiredAdmin = async (req, res, next) => {
  try {
    // Authorization header
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.json({
        ok: false,
        message: "Please login first",
      });
    }

    // Bearer TOKEN
    const token = authHeader.split(" ")[1];

    if (!token) {
      return res.json({
        ok: false,
        message: "Authentication token is required",
      });
    }

    // Verify JWT
    const decoded = jwt.verify(
      token,
      config.SECRET_KEY
    );

    // Get user from database
    const user = await User.findById(decoded.id);

    if (!user) {
      return res.json({
        ok: false,
        message: "User not found",
      });
    }

    // Check account status
    if (!user.isActive) {
      return res.json({
        ok: false,
        message: "Your account is inactive",
      });
    }

    // Check Admin
    if (!user.isAdmin) {
      return res.json({
        ok: false,
        message:
          "You are not Admin, so you cannot access Admin Dashboard",
      });
    }

    // Save user in request
    req.user = user;

    next();

  } catch (error) {
    console.log("Admin Middleware Error:", error);

    return res.json({
      ok: false,
      message: "Unauthorized Access",
    });
  }
};