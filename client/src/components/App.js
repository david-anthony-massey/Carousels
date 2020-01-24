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
    this.getItem = this.getItem.bind(this);
  }

  componentDidMount(){
    this.getItem();
  }

  getItem(){
    axios.get(`/getItem`)
    .then((response) => {
      this.setState({data: response.data})
    })
    axios.get(`/getImages`)
    .then((response) => {
      this.setState({images: response.data})
    })
    .catch(function(error){
      console.log(error);
    })
  }
  
  render() {
    return (
      <div>
        <Carousel newData={this.state.data} newImages={this.state.images}/>
      </div>
    );
  }
}
