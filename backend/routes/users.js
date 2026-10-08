import express from 'express';
const usersRoutes = express.Router();

import * as User from '../controller/users.js';

// Pre-Signup
usersRoutes.route("/Pre-Signup").post(User.preSignup);
// Signup
usersRoutes.route("/signup").post(User.signup);

// Login
usersRoutes.route("/login").post(User.login);
usersRoutes.route("/contact").post(User.contactUs);

export default usersRoutes;
