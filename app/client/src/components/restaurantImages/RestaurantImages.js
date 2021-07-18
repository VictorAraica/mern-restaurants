import "./RestaurantImages.css";

export default function RestaurantImages({ images }) {
  if (!images.length > 0) {
    return (
      <section className="images-section">
        <h2 className="restaurant-details-empty-message">No images</h2>
      </section>
    );
  }

  return (
    <section className="images-section">
      <div className="restaurant-details-image-container">
        {images.map((image, index) => {
          return (
            <img
              src={image}
              key={index}
              alt=""
              className="restaurant-details-image"
            />
          );
        })}
      </div>
    </section>
  );
}
