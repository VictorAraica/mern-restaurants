import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Restaurant.css";
import RestaurantImages from "../../components/restaurantImages/RestaurantImages";
import RestaurantComments from "../../components/restaurantComments/RestaurantComments";

export default function Restaurant({ match }) {
  const [restaurant, setRestaurant] = useState(null);
  const [responseError, setResponseError] = useState(null);
  const [reloadRestaurant, setReloadRestaurant] = useState(true);

  // match.params.id
  const getRestaurant = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/restaurants/${match.params.id}`
      );

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

      setResponseError(error.message);
    }
  };

  useEffect(() => {
    (async () => {
      setRestaurant(await getRestaurant());
    })();
    // eslint-disable-next-line
  }, [reloadRestaurant]);

  if (!restaurant) {
    return (
      <div className="restaurant-details-container">
        <h1 className="message">
          {responseError ? responseError : "Loading..."}
        </h1>
      </div>
    );
  }

  return (
    <main className="restaurant-details-container">
      <h1 className="restaurant-details-title">{restaurant.name}</h1>

      <p className="restaurant-details-description">{restaurant.description}</p>

      <RestaurantImages images={restaurant.images} />
      <RestaurantComments
        comments={restaurant.comments}
        restaurantId={match.params.id}
        reloadRestaurant={reloadRestaurant}
        setReloadRestaurant={setReloadRestaurant}
      />
    </main>
  );
}
