import express from "express";
import protect from "../middleware/authMiddleware.js";
import {
  register,
  loginUser,
  getUser,
} from "../controllers/userControllers.js";

const router = express.Router();

router.route("/").post(register);

router.route("/login").post(loginUser);

router.route("/getUser").get(protect, getUser);

export default router;
