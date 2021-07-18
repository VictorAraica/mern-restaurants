const { Router } = require("express");
const {
  getRestaurants,
  createRestaurant,
  getRestaurantById,
} = require("../controllers/restaurantControllers");

const router = Router();

router.get("/api/restaurants", getRestaurants);
router.get("/api/restaurants/:restaurantId", getRestaurantById);
router.post("/api/restaurants", createRestaurant);

module.exports = router;
