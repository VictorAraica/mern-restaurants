import React from "react";

export default function Comment({ comment }) {
  let d = new Date(comment.date);
  let ye = new Intl.DateTimeFormat("en", { year: "numeric" }).format(d);
  let mo = new Intl.DateTimeFormat("en", { month: "numeric" }).format(d);
  let da = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(d);

  return (
    <div className="comment-container">
      <div className="comment-head">
        <h3 className="comment-user">{comment.user}</h3>
        <p className="comment-date">{comment.date}</p>
      </div>
      <p>{`${da}/${mo}/${ye}`}</p>
    </div>
  );
}
