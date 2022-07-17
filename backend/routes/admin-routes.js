import express from "express";
import middleware from "../middlewares/middleware.js";
import { adminOrMod, adminOnly } from "../middlewares/admin.js";
import {
  addEvent,
  getAdminPage,
  getUsersPage,
  getAdminsandModPage,
} from "../controllers/admin-controller.js";
const router = express.Router();

router.use(middleware).route("/add-event").post(addEvent);
router.get("/home", middleware, adminOrMod, getAdminPage);
router.get("/users", middleware, adminOnly, getUsersPage);
router.get("/admins", middleware, adminOnly, getAdminsandModPage);
export default router;
