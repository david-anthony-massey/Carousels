import React from 'react';
import Product from './Product';
//import data from './dummy_data'

export default function Carousel(props) {
  return (
    <div className="componentContainer">
      <div>
        <p className="customerText">Customers who viewed this item also viewed</p>
        <p className="pagesText">Page {props.counter / 5 + 1} of {Math.ceil(props.productsNumber/5)}</p>
      </div>
      <div className="carouselContainer">
        <button className="button" type="button" onClick={props.lastFive}> &lt; </button>
        <Product productsFive={props.productsFive} goToProduct={props.goToProduct} goToRating={props.goToRating} />
        <button className="button" type="button" onClick={props.nextFive}> &gt; </button>
      </div>
    </div>
  );
}
