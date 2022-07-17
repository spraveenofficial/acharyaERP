import express from "express";
import middleware from "../middlewares/middleware.js";
import { adminOrMod } from "../middlewares/admin.js";
import { addEvent, getAdminPage } from "../controllers/admin-controller.js";
const router = express.Router();

router.use(middleware).route("/add-event").post(addEvent);
router.get("/home", middleware, adminOrMod, getAdminPage);
export default router;
