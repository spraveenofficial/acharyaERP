import express from "express";
import middleware from "../middlewares/middleware.js";
import { fetchEvents } from "../controllers/event-controller.js";

const router = express.Router();

router.route("/all-events").get(fetchEvents);

export default router;
