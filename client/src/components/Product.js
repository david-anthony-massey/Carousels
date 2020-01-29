import React from 'react';
import StarRatingComponent from 'react-star-rating-component';

export default function Product(props) {
  return (
    <div className='productContainer'>
      {Array.from(props.productsFive).map((product, index) => {
        return(
          <div key={index} className='productBlock'>
            <img className='image' src={product.imgUrl} id={product.productId} onClick={props.goToProduct}></img>
            <div className='textBox'>
              <div className='nameText' id={product.productId} onClick={props.goToProduct}>{product.productName}</div>
                <div>
                  <StarRatingComponent
                    name={product.productId.toString()}
                    editing={false}
                    renderStarIcon={() => <span id={product.productId} onClick={props.goToRating} className='rating'>🍁</span>}
                    starCount={Math.round(product.rating)}
                  />
                </div>
              <div className='priceText' id={product.productId} onClick={props.goToProduct}>${(product.price).toFixed(2)}</div>
            </div>
          </div>
        )
      })}
    </div>
  );
}
