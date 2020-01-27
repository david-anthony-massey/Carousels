import React, { Component } from 'react';
import Carousel from './Carousel';
import axios from 'axios';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
      productsAll: '',
      productsFive: '',
      productsNumber: ''
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
    if (this.state.counter+5 >= this.state.productsNumber) {
      this.setState({counter: 0}, ()=>{this.getFive()});
    } else {
      this.setState({counter: this.state.counter+5}, ()=>{this.getFive()});
    }
  }

  lastFive() {
    if (this.state.counter-5 <= 0) {
      this.setState({counter: this.state.productsNumber - (this.state.productsNumber%5) - 5}, ()=>{this.getFive()});
    } else {
      this.setState({counter: this.state.counter-5}, ()=>{this.getFive()});
    }  
  }

  getProducts() {
    axios.get(`/getProducts`)
    .then((response) => {
      this.setState({productsAll: response.data});
    })
    .then(() => {
      this.state.productsNumber = this.state.productsAll.length;
      this.getFive();
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
