
import express from "express";
import * as config from "./config/config.js";
import DBCONFIG from "./config/DBconfig.js";
import serviceroutes from "./routes/services.js";
import usersRoutes from "./routes/users.js";
import morgan from "morgan";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

app.use("/api/v1/service", serviceroutes);
app.use("/api/v1/users", usersRoutes);

DBCONFIG();

app.get("/", (req, res) => {
  res.json({ ok: true, message: "Trade Rank Media API is running" });
});

export default app;
