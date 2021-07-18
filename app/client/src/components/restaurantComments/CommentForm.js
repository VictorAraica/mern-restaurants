import React, { useState } from "react";
import axios from "axios";

export default function CommentForm({
  restaurantId,
  reloadRestaurant,
  setReloadRestaurant,
}) {
  const [user, setUser] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/api/comment", {
        restaurantId: restaurantId,
        user: user,
        comment: comment,
      });

      setReloadRestaurant(!reloadRestaurant);

      setUser("");
      setComment("");
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

  return (
    <form onSubmit={handleSubmit} className="comments-form">
      <label>User:</label>
      <input
        type="text"
        className="comment-input-user"
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />
      <label>Comment:</label>
      <textarea
        className="comment-input-comment"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <input type="submit" value="Submit" className="post-comment-button" />
    </form>
  );
}
