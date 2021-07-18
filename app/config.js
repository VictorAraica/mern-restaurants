const dotenv = require("dotenv");
dotenv.config();

const config = {
  MONGO_URI:
    process.env.MONGO_URI ||
    "mongodb+srv://notadmin:notadmin@cluster0.aik7w.mongodb.net/restaurants?retryWrites=true&w=majority",
  PORT: process.env.PORT || 8080,
};

module.exports = config;
