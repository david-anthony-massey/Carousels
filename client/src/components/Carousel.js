import React from 'react'; 
import ProductBlock from './ProductBlock';
//import data from './dummy_data'

export default function Carousel(props) {
  return (
    <ProductBlock data={props.data} images={props.images}/>
  );
}
