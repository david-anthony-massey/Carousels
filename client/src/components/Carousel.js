import React from 'react'; 
import Product from './Product';
//import data from './dummy_data'

export default function Carousel(props) {
  return (
    <div className ='carouselContainer'>
      <button className='button' onClick={props.lastFive}> &lt; </button> 
      <Product productsFive={props.productsFive} />
      <button className='button' onClick={props.nextFive}> &gt; </button>
    </div>
  );
}
