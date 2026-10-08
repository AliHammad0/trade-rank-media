import User from "../model/users.js";
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
import bcrypt from 'bcryptjs';
import * as config from '../config/config.js';
import jwt from 'jsonwebtoken';
import sendMail from "../helper/sendMail.js";
import { nanoid } from "nanoid";
import sendUserAndToken from "../helper/sendUserAndToken.js";
import nodemailer from 'nodemailer';

// preSignup check for email is real or fake with AWS
export const preSignup = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Both fields are required
        if (!email || !password) {
            return res.json({ error: "Email and password are required" });
        }

        // Check if the email is already taken
        const user = await User.findOne({ email });
        if (user) {
            return res.json({ error: "Email is already taken, please choose a different one" });
        }

        // Check if the email is valid
        if (!emailRegex.test(email)) {
            return res.json({ error: "Invalid email address. Please check and try again." });
        }

        // Check if the password is valid
        if (!password || !passwordRegex.test(password)) {
            return res.json({
                error: 'Password must be at least 8 characters long, contain one uppercase letter, one lowercase letter, one number, and one special character.'
            });
        }

        // Generate a token with email and password
        const token = jwt.sign({ email, password }, config.SECRET_KEY, { expiresIn: "4h" });

        // Styled email content with gradient background and button
        const emailContent = `
<html>
  <head>
    <style>
      body {
        margin: 0;
        padding: 0;
        background: #f06;
        background: linear-gradient(135deg, #f06, #f79c42);
        font-family: Arial, sans-serif;
      }
      .container {
        width: 100%;
        max-width: 600px;
        margin: 0 auto;
        background-color: #ffffff;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        overflow: hidden;
      }
      .header {
        background: linear-gradient(135deg, #ff7e5f, #feb47b);
        padding: 20px;
        text-align: center;
        color: white;
      }
      h1 {
        font-size: 24px;
        margin: 0;
      }
      .content {
        padding: 20px;
        text-align: center;
        color: #333333;
        font-size: 16px;
        line-height: 1.6;
      }
      .button {
        display: inline-block;
        margin-top: 20px;
        padding: 12px 20px;
        background: linear-gradient(135deg, #ff7e5f, #feb47b);
        color: #ffffff !important;
        text-decoration: none;
        border-radius: 5px;
        font-weight: bold;
        font-size: 16px;
      }
      .footer {
        text-align: center;
        color: #999999;
        font-size: 13px;
        padding: 20px;
      }

      @media only screen and (max-width: 480px) {
        h1 {
          font-size: 20px;
        }
        .content {
          padding: 15px;
          font-size: 15px;
        }
        .button {
          font-size: 15px;
          padding: 10px 18px;
        }
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">
        <h1>Welcome to HammadFinds</h1>
      </div>
      <div class="content">
        <p>Thank you for registering with us!</p>
        <p>Please click the button below to verify your account:</p>
        <a href="${config.CLIENT_URL}/auth/verify-email/${token}" class="button">Verify Account</a>
      </div>
      <div class="footer">
        <p>If you did not create an account, no further action is required.</p>
        <p>Thank you for choosing HammadFinds!</p>
      </div>
    </div>
  </body>
</html>
`;

        const emailParams = sendMail(email, emailContent, "Verify your email address");

        // Sending email using AWS SES
        config.AWSSES.sendEmail(emailParams, (err, data) => {
            if (err) {
                return res.json({
                    error: "Email sending failed",
                    err: err.message
                });
            }
            return res.json({
                message: "Verification email sent successfully. Please check your email box to verify your account.",
                data
            });
        });

    } catch (error) {
        return res.json({
            message: "An error occurred",
            error: error.message
        });
    }
};

// Signup: Create a new account


export const signup = async (req, res) => {
  try {
    const { token } = req.body;

    // Token required
    if (!token) {
      return res.json({
        ok: false,
        error: "Verification token is required",
      });
    }

    // Verify token
    let decoded;

    try {
      decoded = jwt.verify(token, config.SECRET_KEY);
    } catch (error) {
      return res.json({
        ok: false,
        error: "Verification link is invalid or expired",
      });
    }

    const { email, password } = decoded;

    // Validate email
    if (!email || !emailRegex.test(email)) {
      return res.json({
        ok: false,
        error: "Invalid email address",
      });
    }

    // Validate password
    if (!password || !passwordRegex.test(password)) {
      return res.json({
        ok: false,
        error:
          "Password must be at least 8 characters long, contain one uppercase letter, one lowercase letter, one number, and one special character.",
      });
    }

    // Check existing user
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.json({
        ok: true,
        alreadyActivated: true,
        message: "Account is already activated. Please login.",
      });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const newUser = await User.create({
      email,
      password: hashedPassword,
      username: nanoid(12),
    });

    // Remove password from response
    const userResponse = newUser.toObject();
    delete userResponse.password;

    return res.json({
      ok: true,
      message: "Account created successfully. You can now login.",
      user: userResponse,
    });

  } catch (error) {
    console.error("Signup Error:", error);

    return res.json({
      ok: false,
      error: "Failed to create user",
      message: error.message,
    });
  }
};




///login api here


export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.json({
        ok: false,
        error: "Email and password are required",
      });
    }

    const user = await User.findOne({
      email: email.trim().toLowerCase(),
    });

    if (!user) {
      return res.json({
        ok: false,
        error: "Invalid email or password",
      });
    }

    const match = await bcrypt.compare(
      password,
      user.password
    );

    if (!match) {
      return res.json({
        ok: false,
        error: "Invalid email or password",
      });
    }

    // Login successful
    return sendUserAndToken(req, res, user);

  } catch (error) {
    console.log("Login Error:", error);

    return res.json({
      ok: false,
      error: "Login failed",
    });
  }
};

export const contactUs = async (req, res) => {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    try {
        // Gmail SMTP setup
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'alihammadzk@gmail.com', // 👈 your email
                pass: 'mmdh oujd cmjz mmtj' // 👈 generated app password (not Gmail password)
            }
        });

        const mailOptions = {
            from: email,
            to: 'alihammadzk@gmail.com',
            subject: `Contact Form Message: ${subject}`,
            html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
        };

        await transporter.sendMail(mailOptions);

        res.json({ success: true, message: 'Message sent successfully!' });

    } catch (error) {
        console.error('Email error:', error);
        res.json({ error: 'Email failed to send', detail: error.message });
    }
};










