import React, { Component } from 'react';
import Carousel from './Carousel';
import axios from 'axios';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      data: '',
      images: ''
    };
    this.getProducts = this.getProducts.bind(this);
  }

  componentDidMount(){
    this.getProducts();
  }

  getProducts(){
    axios.get(`/getProducts`)
    .then((response) => {
      this.setState({data: response.data})
    })
    .catch(function(error){
      console.log(error);
    })
  }
  
  render() {
    return (
      <div>
        <Carousel data={this.state.data} images={this.state.images}/>
      </div>
    );
  }
}
