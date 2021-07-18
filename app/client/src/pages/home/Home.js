import { useState, useEffect } from "react";
import axios from "axios";
import RestaurantCard from "../../components/restaurantCard/RestaurantCard";
import "./Home.css";

export default function Home() {
  const [restaurants, setRestaurants] = useState([]);

  const getRestaurants = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/restaurants");
      return response.data;
    } catch (error) {
      if (error.response) {
        // Request made and server responded
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log("Error", error.message);
      }
    }
  };

  useEffect(() => {
    (async () => {
      setRestaurants(await getRestaurants());
    })();
  }, []);

  return (
    <div className="restaurants-container">
      {restaurants ? (
        restaurants.map((restaurant, index) => {
          return (
            <RestaurantCard restaurant={restaurant} key={restaurant._id} />
          );
        })
      ) : (
        <h1>No Restaurants</h1>
      )}
    </div>
  );
}
