import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
import AuthRoutes from "./routes/auth-routes.js";
import AttendanceRoute from "./routes/attendence-routes.js";
import ClassesRoutes from "./routes/classes-routes.js";
import "./database/db.js";
dotenv.config();

const app = express();
app.use(express.urlencoded({ extended: false }));

// Registering morgan for development
app.use(morgan("dev"));

// Registering Cors
app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());

const PORT = process.env.PORT || 3505;

// Registering Routes
app.use("/v1/api/auth/", AuthRoutes);
app.use("/v1/api/attendance/", AttendanceRoute);
app.use("/v1/api/classes/", ClassesRoutes);

// Server initialize
app.listen(PORT, () => console.log(`App started running on ${PORT}`));
