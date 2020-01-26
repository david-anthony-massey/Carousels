import React, { Component } from 'react';
import Carousel from './Carousel';
import axios from 'axios';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      data: '',
      dataFive: '',
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
    let getFive = this.state.data.slice(0,5);
    this.setState({dataFive: getFive})
    console.log(this.state.dataFive)
  }

  getProducts() {
    axios.get(`/getProducts`)
    .then((response) => {
      this.setState({data: response.data})
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
        <Carousel data={this.state.data} />
      </div>
    );
  }
}
