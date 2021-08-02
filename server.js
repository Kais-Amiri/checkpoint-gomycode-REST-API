const express = require("express");
const connectToDb = require("./config/connectToDb");
const userRoute = require("./routes/userRoute");
require("dotenv").config({ path: "./config/.env" });
const cors = require("cors");

const app = express();
const port = process.env.port || 8080;

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());

connectToDb();

app.use("/", userRoute);

app.listen(port, (err) => {
  if (err) throw err;
  else console.log(`App listening on ${port}`);
});
