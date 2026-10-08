import * as config from '../config/config.js';
import jwt from 'jsonwebtoken';

const sendUserAndToken = (req, res, user) => {
  try {
    const token = jwt.sign(
      { id: user._id },
      config.SECRET_KEY,
      { expiresIn: "1h" }
    );

    // Refresh Token
    const refreshToken = jwt.sign(
      { id: user._id },
      config.REFRESH_KEY,
      { expiresIn: "1w" }
    );

    user.password = undefined;
    user.token = token;

    res.json({
      ok: true,
      message: "Login successful",
      user,
      token: token,
      refreshToken: refreshToken,
    });

  } catch (error) {
    res.json({
      ok: false,
      message: error.message,
    });
  }
};

export default sendUserAndToken;