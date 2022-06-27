import express from "express";
import middleware from "../middlewares/middleware.js";
import {
  fetchEvents,
  fetchEvent,
  initializeCheckout,
  fetchCheckout,
  makeFreeOrder,
} from "../controllers/event-controller.js";
import checkBookingConditions from "../middlewares/event.js";

const router = express.Router();

router.route("/all-events").get(fetchEvents);
router.route("/event/:id").get(fetchEvent);
router.use(middleware).route("/checkout").post(initializeCheckout);
router.use(middleware).route("/checkout/:checkOutId").get(fetchCheckout);
router
  .use(middleware, checkBookingConditions)
  .route("/book")
  .post(makeFreeOrder);
export default router;
