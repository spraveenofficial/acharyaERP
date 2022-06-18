import express from "express";
import { login, profile } from "../controllers/auth-controller.js";
const router = express.Router();

router.route("/login").post(login);
router.route("/profile").get(profile);
export default router;
