// Require packages
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const path = require("path");

// Require controllers, models and routers
const TaskRoutes = require("./routes/taskRoutes");
const ViewRoutes = require("./routes/viewRoutes");

const db = process.env.DATABASE;
const port = process.env.PORT;
const localhost = process.env.LOCALHOST;

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("database connected");
  });

const app = express();

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "Public")));

app.use(morgan("dev"));

// Body parser
app.use(express.json());

app.use("/landing", ViewRoutes);
app.use("/api/v1/tasks", TaskRoutes);

app.listen(port, localhost, () => {
  console.log("server running ...");
});
