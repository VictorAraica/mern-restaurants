const { model, Schema } = require("mongoose");

const commentSchema = new Schema({
  date: { type: Date, default: Date.now },
  user: { type: String, required: true },
  comment: { type: String, required: true },
});

const restaurantSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  images: [String],
  comments: [commentSchema],
});

module.exports = new model("Restaurant", restaurantSchema);
