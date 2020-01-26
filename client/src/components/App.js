import React, { Component } from 'react';
import Carousel from './Carousel';
import axios from 'axios';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      productsAll: '',
      productsFive: '',
      counter: 0,
      pages: ''
    };
    this.getProducts = this.getProducts.bind(this);
    this.getFive = this.getFive.bind(this);
    this.nextFive = this.nextFive.bind(this);
    this.lastFive = this.lastFive.bind(this);
  }

  componentDidMount() {
    this.getProducts();
  }

  getFive() {
    let getFive = this.state.productsAll.slice(this.state.counter, this.state.counter+5);
    this.setState({productsFive: getFive})
    console.log(this.state.productsFive)
  }

  nextFive() {
    this.setState({counter: this.state.counter+5}); 
    this.getFive();
  }

  lastFive() {
    this.setState({counter: this.state.counter-5});
    this.getFive();
  }

  getProducts() {
    axios.get(`/getProducts`)
    .then((response) => {
      this.setState({productsAll: response.data});
    })
    .then(() => {
      this.state.pages = this.state.productsAll.length/5;
      this.getFive();
      console.log(this.state.pages);
    })
    .catch(function(error) {
      console.log(error);
    })
  }
  
  render() {
    return (
      <div>
        <Carousel productsFive={this.state.productsFive} nextFive={this.nextFive} lastFive={this.lastFive}/>
      </div>
    );
  }
}
