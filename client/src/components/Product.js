import React from 'react';
import Rating from './Rating.js';

export default function Product(props) {
  return (
    <div className="productContainer">
      {Array.from(props.productsFive).map((product, index) => {
        return (
          <div key={index} className="productBlock">
            <img 
              className="image" 
              src={product.imgUrl}
              id={product.productId}
              data-cat={product.categoryId}
              onClick={props.goToProduct}
            />
            <div className="textBox">
              <div className="nameText" id={product.productId} onClick={props.goToProduct}>{product.productName}</div>
              <Rating product={product} goToRating={props.goToRating} />
              <div className="priceText" id={product.productId} onClick={props.goToProduct}>${(product.price).toFixed(2)}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
