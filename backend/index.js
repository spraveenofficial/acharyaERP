import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
import AuthRoutes from "./routes/auth-routes.js";
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
app.use("/api/auth/", AuthRoutes);

// Server initialize
app.listen(PORT, () => console.log(`App started running on ${PORT}`));
