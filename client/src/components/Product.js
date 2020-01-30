import React from 'react';
import StarRatingComponent from 'react-star-rating-component';

export default function Product(props) {
  console.log(props);
  return (
    <div className='productContainer'>
      {Array.from(props.productsFive).map((product, index) => {
        return(
          <div key={index} className='productBlock'>
            <img className='image' src={product.imgUrl} id={product.productId} data-cat={product.categoryId} onClick={props.goToProduct}></img>
            <div className='textBox'>
              <div className='nameText' id={product.productId} onClick={props.goToProduct}>{product.productName}</div>
              <StarRatingComponent
                  name={'rating'+index}
                  editing={false}
                  renderStarIcon={() => <span id={product.productId} data-cat={product.categoryId} onClick={props.goToRating} className='rating'><img src="styles/images/full_leaf.png" alt='test' height='27px' width='27px' /></span>}
                  renderStarIconHalf={() => <span id={product.productId} data-cat={product.categoryId} onClick={props.goToRating} className='rating'><img src="styles/images/half_leaf_bordered.png" alt='test' height='25px' width='25px' margin='5px'/></span>}
                  starCount={Math.round(product.rating)}
              />
              <div className='priceText' id={product.productId} onClick={props.goToProduct}>${(product.price).toFixed(2)}</div>
            </div>
          </div>
        )
      })}
    </div>
  );
}
