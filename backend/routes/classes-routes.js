import express from "express";

import { getClasses } from "../controllers/classes-controller.js";
import middleware from "../middlewares/middleware.js";

const router = express.Router();

router.route("/").get(getClasses);

export default router;
