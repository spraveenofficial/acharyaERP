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

router.use(middleware).route("/my-bookings").get(fetchUserAllOrders);
router.use(middleware).route("/order/:orderId").get(fetchUserEachOrder);
router.route("/all-events").get(fetchEvents);
router.route("/event/:id").get(fetchEvent);
router.use(middleware).route("/checkout/:checkoutId").get(fetchCheckout);

router
  .use(middleware, checkOutConditions)
  .route("/checkout")
  .post(initializeCheckout);

router
  .use(middleware, checkBookingConditions)
  .route("/book")
  .post(makeFreeOrder);

export default router;
