import express from "express";
import middleware from "../middlewares/middleware.js";
import { adminOrMod, adminOnly } from "../middlewares/admin.js";
import {
  addEvent,
  getAdminPage,
  getUsersPage,
  getAdminsandModPage,
  removeAdminsAndMods,
  getAllEvents,
} from "../controllers/admin-controller.js";
const router = express.Router();

router.use(middleware).route("/add-event").post(addEvent);
router.get("/home", middleware, adminOrMod, getAdminPage);
router.get("/users", middleware, adminOnly, getUsersPage);
router.get("/admins", middleware, adminOnly, getAdminsandModPage);
router.post("/admins/action", middleware, adminOnly, removeAdminsAndMods);
router.get("/events", middleware, adminOrMod, getAllEvents);
export default router;
