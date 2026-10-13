
import User from "../model/users.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import AWS from "aws-sdk";
import nodemailer from "nodemailer";
import { nanoid } from "nanoid";
import sendMail from "../helper/sendMail.js";
import sendUserAndToken from "../helper/sendUserAndToken.js";

const emailRegex =
  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

const SECRET_KEY = process.env.SECRET_KEY;
const CLIENT_URL = process.env.CLIENT_URL;

const AWSSES = new AWS.SES({
  region: process.env.AWS_REGION || "ap-south-1",
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

// Pre-signup: Send verification email
export const preSignup = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.json({
        ok: false,
        message: "Email and password are required",
      });
    }

    const normalizedEmail = email.trim().toLowerCase();

    if (!emailRegex.test(normalizedEmail)) {
      return res.json({
        ok: false,
        message: "Invalid email address",
      });
    }

    if (!passwordRegex.test(password)) {
      return res.json({
        ok: false,
        message:
          "Password must be at least 8 characters and contain uppercase, lowercase, number, and special character.",
      });
    }

    if (!SECRET_KEY || !CLIENT_URL) {
      throw new Error("SECRET_KEY or CLIENT_URL is missing");
    }

    const existingUser = await User.findOne({
      email: normalizedEmail,
    });

    if (existingUser) {
      return res.json({
        ok: false,
        message: "Email is already registered",
      });
    }

    const token = jwt.sign(
      { email: normalizedEmail, password },
      SECRET_KEY,
      { expiresIn: "4h" }
    );

    const verificationUrl =
      `${CLIENT_URL}/auth/verify-email/${token}`;

    const emailContent = `
      <div style="font-family:Arial,sans-serif;padding:25px;text-align:center">
        <h1>Welcome to HammadFinds</h1>
        <p>Thank you for registering with us!</p>
        <p>Click below to verify your email address.</p>
        <a href="${verificationUrl}"
          style="display:inline-block;padding:12px 20px;background:#ff7e5f;color:white;text-decoration:none;border-radius:5px">
          Verify Account
        </a>
        <p>If you did not create an account, ignore this email.</p>
      </div>
    `;

    const emailParams = sendMail(
      normalizedEmail,
      emailContent,
      "Verify your email address"
    );

    const data = await AWSSES.sendEmail(emailParams).promise();

    return res.json({
      ok: true,
      message: "Verification email sent successfully",
      data,
    });
  } catch (error) {
    console.error("Pre-signup Error:", error.message);

    return res.json({
      ok: false,
      message: "Failed to send verification email",
    });
  }
};

// Signup
export const signup = async (req, res) => {
  try {
    const { token } = req.body;

    if (!token) {
      return res.json({
        ok: false,
        message: "Verification token is required",
      });
    }

    if (!SECRET_KEY) {
      throw new Error("SECRET_KEY is missing");
    }

    let decoded;

    try {
      decoded = jwt.verify(token, SECRET_KEY);
    } catch {
      return res.json({
        ok: false,
        message: "Verification link is invalid or expired",
      });
    }

    const { email, password } = decoded;

    if (!email || !emailRegex.test(email)) {
      return res.json({
        ok: false,
        message: "Invalid email address",
      });
    }

    if (!password || !passwordRegex.test(password)) {
      return res.json({
        ok: false,
        message: "Password does not meet security requirements",
      });
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.json({
        ok: true,
        alreadyActivated: true,
        message: "Account already exists. Please login.",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      email,
      password: hashedPassword,
      username: nanoid(12),
    });

    const userResponse = newUser.toObject();
    delete userResponse.password;

    return res.json({
      ok: true,
      message: "Account created successfully",
      user: userResponse,
    });
  } catch (error) {
    console.error("Signup Error:", error.message);

    return res.json({
      ok: false,
      message: "Failed to create user",
    });
  }
};

// Login
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.json({
        ok: false,
        message: "Email and password are required",
      });
    }

    const user = await User.findOne({
      email: email.trim().toLowerCase(),
    });

    if (!user) {
      return res.json({
        ok: false,
        message: "Invalid email or password",
      });
    }

    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      return res.json({
        ok: false,
        message: "Invalid email or password",
      });
    }

    return sendUserAndToken(req, res, user);
  } catch (error) {
    console.error("Login Error:", error.message);

    return res.json({
      ok: false,
      message: "Login failed",
    });
  }
};

// Contact Us
export const contactUs = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.json({
        ok: false,
        message: "All fields are required",
      });
    }

    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
      throw new Error("Gmail environment variables are missing");
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      replyTo: email,
      to: process.env.GMAIL_USER,
      subject: `Contact Form Message: ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`,
    });

    return res.json({
      ok: true,
      message: "Message sent successfully",
    });
  } catch (error) {
    console.error("Contact Email Error:", error.message);

    return res.json({
      ok: false,
      message: "Email failed to send",
    });
  }
};
