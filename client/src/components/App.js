import React, { Component } from "react";
import Carousel from './Carousel';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      message: "Rendered from State"
    };
  }
  render() {
    return (
      <div>
        <Carousel />
        <p>{this.state.message}</p>
      </div>
    );
  }
}
