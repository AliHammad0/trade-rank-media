
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

app.use(
  cors({
    origin: "https://trade-rank-media-six.vercel.app",
    credentials: true,
  })
);

app.use("/api/v1/service", serviceroutes);
app.use("/api/v1/users", usersRoutes);

DBCONFIG();

export default app;
