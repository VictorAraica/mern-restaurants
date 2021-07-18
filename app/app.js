const express = require("express");
const morgan = require("morgan");
const config = require("./config");
const cors = require("cors");
const path = require("path");
const restaurantRoutes = require("./routes/restaurantRoutes");
const commentsRoutes = require("./routes/commentsRoutes");

const app = express();

app.set("port", config.PORT);

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Serve static assets if in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  // app.get("*", (req, res) => {
  //   res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  // });
}

// api routes
app.use(restaurantRoutes);
app.use(commentsRoutes);

module.exports = app;
