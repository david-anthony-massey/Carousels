import React from 'react';

export default function ProductBlock(props) {
  console.log(props);
  return (
    <div>
      {Array.from(props.data).map((product, index) => {
        return(
          <div key={index}>
            <img className='image' src={product.imgUrl}></img>
            <div className='textBox'>
              <div className='nameText'>{product.productName}</div>
              <div className='priceText'>${(product.price).toFixed(2)}</div>
            </div>
          </div>
        )
      })}
    </div>
  );
}
