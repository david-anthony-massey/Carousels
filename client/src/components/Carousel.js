import React from 'react';
//import data from './dummy_data'

export default function Carousel(props) {
  console.log(props.newData);
  return (
    <div>
       {Array.from(props.newData).map((product, index) => {
        return(
          <div className="row" key={index}>
            <div className="productBlock">{product.productName}</div>
            <div className="productBlock">{product.productDescription}</div>
            <div className="productBlock">{(product.price).toFixed(2)}</div>
          </div>
        )
        })}
      {/* <p>Rendered From Carousel via App</p>
      <p>productId: {data[0].productId}</p>
      <p>productName: {data[0].productName}</p>
      <p>productDecription: {data[0].productDescription}</p>
      <p>price: {data[0].price}</p>
      <p>category_id: {data[0].category_id}</p>
      <p>imgUrls: {data[0].imgUrls}</p>
      {data[0].imgUrls.map((image, value) => {
        return(
          <img key={value} src={image}></img>
        )
      })} */}
    </div>
  );
}
