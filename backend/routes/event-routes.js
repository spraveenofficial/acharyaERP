import express from "express";
import middleware from "../middlewares/middleware.js";
import { fetchEvents, fetchEvent } from "../controllers/event-controller.js";

const router = express.Router();

router.route("/all-events").get(fetchEvents);
router.route("/event/:id").get(fetchEvent);
export default router;
