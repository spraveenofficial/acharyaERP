import express from "express";
import middleware from "../middlewares/middleware.js";
import { makePayment } from "../controllers/payment-controller.js";
const router = express.Router();

// router.use(middleware).route("/init/:params").post(makePayment);
// Make route as params
router.use(middleware).route("/init").get(makePayment);

export default router;
