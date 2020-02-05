import React from 'react';
import Rating from './Rating.js';

export default function Product(props) {
  return (
    <div className="carousel-productContainer">
      {Array.from(props.productsFive).map((product, index) => {
        return (
          <div key={index} className="carousel-productBlock">
            <img
              className="carousel-image"
              src={product.imgUrl}
              id={product.productId}
              // onClick={props.goToProduct}
            />
            <div className="carousel-textBox">
              <div className="carousel-nameText" id={product.productId}/*onClick={props.goToProduct}*/>{product.productName}</div>
              <Rating product={product} /*goToRating={props.goToRating}*/ />
              <div className="carousel-priceText" id={product.productId}/*onClick={props.goToProduct}*/>${(product.price).toFixed(2)}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
