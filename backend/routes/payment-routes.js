import express from "express";
import middleware from "../middlewares/middleware.js";
import { makePayment } from "../controllers/payment-controller.js";
const router = express.Router();

router.use(middleware).route("/init").post(makePayment);

export default router;
