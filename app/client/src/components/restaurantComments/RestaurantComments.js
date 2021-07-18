import React from "react";
import "./RestaurantComments.css";
import Comment from "./Comment";
import CommentForm from "./CommentForm";

export default function RestaurantComments({
  comments,
  restaurantId,
  reloadRestaurant,
  setReloadRestaurant,
}) {
  if (!comments.length > 0) {
    return (
      <section className="comments-section">
        <h2 className="restaurant-details-subtitle">Comments</h2>
        <h2 className="restaurant-details-empty-message">No comments</h2>
        <CommentForm
          restaurantId={restaurantId}
          reloadRestaurant={reloadRestaurant}
          setReloadRestaurant={setReloadRestaurant}
        />
      </section>
    );
  }

  comments.sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <section className="comments-section">
      <h2 className="restaurant-details-subtitle">Comments</h2>
      <div className="comments-container">
        {comments.map((comment, index) => {
          return (
            <div key={comment._id}>
              <Comment comment={comment} />
              <hr />
            </div>
          );
        })}
      </div>
      <CommentForm
        restaurantId={restaurantId}
        reloadRestaurant={reloadRestaurant}
        setReloadRestaurant={setReloadRestaurant}
      />
    </section>
  );
}
