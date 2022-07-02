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
router.route("/event/:id").get(fetchEvent);
router.post(
  "/init/checkout",
  middleware,
  checkOutConditions,
  initializeCheckout
);

router.get(
  "/checkout/:checkoutId",
  middleware,
  // checkBookingConditions,
  fetchCheckout
);
router.get("/my-bookings", middleware, fetchUserAllOrders);

router.use(middleware).route("/order/:orderId").get(fetchUserEachOrder);

router.use(middleware).route("/book").post(makeFreeOrder);

export default router;
