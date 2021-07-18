const Mongoose = require("mongoose");
const config = require("./config");

const db = async () => {
  try {
    const mongooseOptions = {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    };

    const db = await Mongoose.connect(config.MONGO_URI, mongooseOptions);

    console.log(`database is connected to: ${db.connection.name}`);
  } catch (error) {
    console.error(error);
  }
};

module.exports = db;
