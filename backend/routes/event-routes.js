import express from "express";
import middleware from "../middlewares/middleware.js";
import {
  fetchEvents,
  fetchEvent,
  initializeCheckout,
  fetchCheckout,
} from "../controllers/event-controller.js";

const router = express.Router();

router.route("/all-events").get(fetchEvents);
router.route("/event/:id").get(fetchEvent);
router.use(middleware).route("/checkout").post(initializeCheckout);
router.use(middleware).route("/checkout/:checkOutId").get(fetchCheckout);
export default router;
