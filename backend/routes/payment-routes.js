import express from "express";
import middleware from "../middlewares/middleware.js";
import { checkBookingConditions } from "../middlewares/event.js";
import {
  makePayment,
  verifyPayment,
} from "../controllers/payment-controller.js";
const router = express.Router();

// router.use(middleware).route("/init/:params").post(makePayment);
router.route("/verify").post(verifyPayment);
// Make route as params
router.use(middleware).route("/init").get(makePayment);
// router.route("/verify").post(verifyPayment);


export default router;
