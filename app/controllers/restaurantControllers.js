const Restaurant = require("../schemas/restaurantSchema");


const getRestaurants = async (req, res) => {
  try {
    const restaurants = await Restaurant.find().select([
      "name",
      "description",
      "images",
    ]);

    return res.status(201).json(restaurants);
  } catch (err) {
    return res.status(400).send(err);
  }
};

const getRestaurantById = async (req, res) => {
  try {
    const restaurant = await Restaurant.findById(req.params.restaurantId);

    return res.status(201).json(restaurant);
  } catch (err) {
    return res.status(400).send(err);
  }
};

const createRestaurant = async (req, res) => {
  try {
    const newRestaurant = new Restaurant({
      name: req.body.name,
      description: req.body.description,
      images: req.body.images
    });

    newRestaurant.save();

    return res.status(201).json("restaurant uploaded");
  } catch (err) {
    return res.status(400).send(err);
  }
};

module.exports = {
  getRestaurants: getRestaurants,
  getRestaurantById: getRestaurantById,
  createRestaurant: createRestaurant,
};
