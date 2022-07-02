import express from "express";
import middleware from "../middlewares/middleware.js";
import {
  fetchEvents,
  fetchEvent,
  initializeCheckout,
  fetchCheckout,
  makeFreeOrder,
  fetchUserEachOrder,
  fetchUserAllOrders,
} from "../controllers/event-controller.js";

import {
  checkBookingConditions,
  checkOutConditions,
} from "../middlewares/event.js";

const router = express.Router();

router.route("/all-events").get(fetchEvents);
router.use(middleware).route("/my-bookings").get(fetchUserAllOrders);
router.use(middleware).route("/order/:orderId").get(fetchUserEachOrder);
router.use(middleware).route("/checkout").post(initializeCheckout);
router.route("/event/:id").get(fetchEvent);
router.use(middleware).route("/checkout/:checkoutId").get(fetchCheckout);

router.use(middleware).route("/book").post(makeFreeOrder);

export default router;
