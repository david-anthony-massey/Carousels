import React from 'react'; 
import ProductBlock from './ProductBlock';
//import data from './dummy_data'

export default function Carousel(props) {
  return (
    <div className ='carouselContainer'>
      <button className='button' onClick={props.lastFive}> &lt; </button> 
      <ProductBlock productsFive={props.productsFive} />
      <button className='button' onClick={props.nextFive}> &gt; </button>
    </div>
  );
}
