
import jwt from "jsonwebtoken";
import User from "../model/users.js";

export const requiredAdmin = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.json({
        ok: false,
        message: "Please login first",
      });
    }

    const token = authHeader.split(" ")[1];

    if (!token) {
      return res.json({
        ok: false,
        message: "Authentication token is required",
      });
    }

    const decoded = jwt.verify(
      token,
      process.env.SECRET_KEY
    );

    const user = await User.findById(decoded.id);

    if (!user) {
      return res.json({
        ok: false,
        message: "User not found",
      });
    }

    if (!user.isActive) {
      return res.json({
        ok: false,
        message: "Your account is inactive",
      });
    }

    if (!user.isAdmin) {
      return res.json({
        ok: false,
        message: "You are not Admin, so you cannot access Admin Dashboard",
      });
    }

    req.user = user;

    next();
  } catch (error) {
    console.log("Admin Middleware Error:", error.message);

    return res.json({
      ok: false,
      message: "Unauthorized Access",
    });
  }
};
