import express from "express";
import middleware from "../middlewares/middleware.js";
import { addEvent } from "../controllers/admin-controller.js";
const router = express.Router();

router.use(middleware).route("/add-event").post(addEvent);

export default router;
