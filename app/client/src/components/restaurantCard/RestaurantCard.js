import "./RestaurantCard.css";
import { Link } from "react-router-dom";

export default function RestaurantCard({ restaurant }) {
  const maxStringLength = 160;
  return (
    <div className="restaurant-card-container">
      <Link
        className="restaurant-card-title-link"
        to={`/restaurant/${restaurant._id}`}
      >
        <img
          src={restaurant.images[0]}
          className="restaurant-card-image"
          alt="restaurant"
        />
        <h2 className="restaurant-card-title">{restaurant.name}</h2>
      </Link>
      <p className="restaurant-card-description">
        {restaurant.description.substring(0, maxStringLength)}{" "}
        {restaurant.description.length > maxStringLength ? (
          <Link
            className="restaurant-card-more-button"
            to={`/restaurant/${restaurant._id}`}
          >
            more...
          </Link>
        ) : (
          ""
        )}
      </p>
    </div>
  );
}
