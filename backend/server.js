
import express from "express";
import * as config from "./config/config.js";
import DBCONFIG from "./config/DBconfig.js";
import serviceroutes from "./routes/services.js";
import usersRoutes from "./routes/users.js";
import morgan from "morgan";
import cors from "cors";

const app = express();
const port = process.env.PORT || config.PORT || 8080;

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

app.use("/api/v1/service", serviceroutes);
app.use("/api/v1/users", usersRoutes);

DBCONFIG();

app.listen(port, "0.0.0.0", () => {
  console.log(`Trade Rank Media is running on port ${port}`);
});
