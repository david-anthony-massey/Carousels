import React, { Component } from 'react';
import Carousel from './Carousel';
import axios from 'axios';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      productsAll: '',
      productsFive: '',
      count: 1,
      pages: ''
    };
    this.getProducts = this.getProducts.bind(this);
    this.getFive = this.getFive.bind(this);
  }

  componentDidMount() {
    this.getProducts();
  }

  getFive() {
    let getFive = this.state.productsAll.slice(0,5);
    this.setState({productsFive: getFive})
    console.log(this.state.productsFive)
  }

  getProducts() {
    axios.get(`/getProducts`)
    .then((response) => {
      this.setState({productsAll: response.data})
    })
    .then(() => {
      this.getFive()
    })
    .catch(function(error) {
      console.log(error);
    })
  }
  
  render() {
    return (
      <div>
        <Carousel productsFive={this.state.productsFive} />
      </div>
    );
  }
}
