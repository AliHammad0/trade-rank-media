import express from "express";
import * as config from "./config/config.js";
import DBCONFIG from "./config/DBconfig.js";
import serviceroutes from "./routes/services.js";
import usersRoutes from "./routes/users.js";

const app = express();
const port = config.PORT;

///json data 
app.use(express.json());
//morgan
import morgan from "morgan";
app.use(morgan("dev"));
//cors
import cors from "cors";
app.use(cors());





DBCONFIG();



///
app.use ("/api/v1/service",serviceroutes)
app.use ("/api/v1/users",usersRoutes)


app.listen(port, () => {
  console.log(
    `Trade Rank Media is running on http://localhost:${port}/api/v1`
  );
});