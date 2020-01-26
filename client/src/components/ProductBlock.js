import React from 'react';
import StarRatingComponent from 'react-star-rating-component';

export default function ProductBlock(props) {
  console.log(props);
  return (
    <div className='productContainer'>
      {Array.from(props.productsFive).map((product, index) => {
        return(
          <div key={index} className='productBlock'>
            <img className='image' src={product.imgUrl}></img>
            <div className='textBox'>
              <div className='nameText'>{product.productName}</div>
                <StarRatingComponent 
                  name={'rating' + index}
                  //editing={false}
                  renderStarIcon={() => <span>🍁</span>}
                  emptyStarColor={'#ffffff'}
                  starColor='#ff0000'
                />
              <div className='priceText'>${(product.price).toFixed(2)}</div>
            </div>
          </div>
        )
      })}
    </div>
  );
}
