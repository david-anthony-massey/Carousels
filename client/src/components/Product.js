import React from 'react';
import StarRatingComponent from 'react-star-rating-component';

export default function Product(props) {
  return (
    <div className='productContainer'>
        {console.log(props)}
        {Array.from(props.productsFive).map((product, index) => {
          return(
            <div key={index} className='productBlock'>
              <img className='image' src={product.imgUrl} onClick={props.goToProduct}></img>
              <div className='textBox'>
                <div className='nameText' onClick={props.goToProduct}>{product.productName}</div>
                  <StarRatingComponent 
                    name={'rating' + index}
                    editing={false}
                    renderStarIcon={() => <span>🍁</span>}
                    starCount={Math.round(product.rating)}
                    //emptyStarColor={'#ffffff'}
                    //starColor='#ff0000'
                  />
                <div className='priceText'>${(product.price).toFixed(2)}</div>
              </div>
            </div>
          )
        })}
    </div>
  );
}
