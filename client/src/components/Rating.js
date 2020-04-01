import React from "react";

export default function Rating({ product, goToRating }) {
  const rating = [];
  let image = "";
  for (let i = 1; i < 6; i++) {
    if (i <= product.rating) {
      image =
        "https://saskatchewanazon-carousel.herokuapp.com/styles/images/full_leaf.png";
    } else if (i - product.rating <= 0.25) {
      image =
        "https://saskatchewanazon-carousel.herokuapp.com/styles/images/full_leaf.png";
    } else if (i - product.rating > 0.25 && i - product.rating < 0.75) {
      image =
        "https://saskatchewanazon-carousel.herokuapp.com/styles/images/half_leaf.png";
    } else {
      image =
        "https://saskatchewanazon-carousel.herokuapp.com/styles/images/empty_leaf.png";
}

    rating.push(
      <img
        key={i}
        src={image}
        alt="Leaf"
        id={product.productId}
        className="carousel-rating"
        onClick={goToRating}
        height="27px"
        width="27px"
      />
    );
  }

  return <div>{rating}</div>;
}
