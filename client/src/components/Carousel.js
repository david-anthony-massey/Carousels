import React from 'react';
import data from './dummy_data'

export default function Carousel() {
  console.log(data[0])
  return (
    <div>
      <p>Rendered From Carousel via App</p>
      <p>productId: {data[0].productId}</p>
      <p>productName: {data[0].productName}</p>
      <p>productDecription: {data[0].productDescription}</p>
      <p>price: {data[0].price}</p>
      <p>category_id: {data[0].category_id}</p>
      <p>imgUrls: {data[0].imgUrls}</p>
      {data[0].imgUrls.map((image) => {
        console.log(image);
        return(
        <img src={image}></img>
        )
      })}
    </div>
  );
}
