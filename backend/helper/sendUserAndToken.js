
import jwt from "jsonwebtoken";

const sendUserAndToken = (req, res, user) => {
  try {
    const token = jwt.sign(
      { id: user._id },
      process.env.SECRET_KEY,
      { expiresIn: "1h" }
    );

    const refreshToken = jwt.sign(
      { id: user._id },
      process.env.REFRESH_KEY,
      { expiresIn: "1w" }
    );

    user.password = undefined;
    user.token = token;

    res.json({
      ok: true,
      message: "Login successful",
      user,
      token,
      refreshToken,
    });
  } catch (error) {
    res.json({
      ok: false,
      message: error.message,
    });
  }
};

export default sendUserAndToken;
