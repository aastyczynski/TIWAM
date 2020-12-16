const express = require("express");
const cors = require("cors");
const app = express();
const APP_PORT = process.env.PORT || 5000;
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");

dotenv.config();

mongoose.connect(
  process.env.DB_CONNECT,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected to db!");
  }
);

app.use(cors());
app.use(express.json());
app.use("/api/user", authRoute);

app.listen(APP_PORT, () => {
  console.log(`Server is running at port ${APP_PORT}`);
});
