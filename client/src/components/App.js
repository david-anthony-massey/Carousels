import React, { Component } from "react";
import axios from "axios";
import Carousel from "./Carousel";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      productId: 0, // If category id = 0; return all products
      counter: 0,
      productsAll: "",
      productsFive: "",
      productsNumber: ""
    };
    this.getProducts = this.getProducts.bind(this);
    this.getFive = this.getFive.bind(this);
    this.nextFive = this.nextFive.bind(this);
    this.lastFive = this.lastFive.bind(this);
    this.goToProduct = this.goToProduct.bind(this);
    this.goToRating = this.goToRating.bind(this);
    this.resetProducts = this.resetProducts.bind(this);

    // const event = new Event('click');
    window.addEventListener(
      "click",
      event => {
        if (
          event.target.getAttribute("data-id") &&
          event.target.getAttribute("data-id") !== this.state.currentItem.id &&
          !isNaN(event.target.getAttribute("data-id"))
        ) {
          this.setState(
            { productId: event.target.getAttribute("data-id") },
            () => {
              console.log(`state.productId = ${this.state.productId}`);
              this.getProducts();
            }
          );
        }
      },
      false
    );
    // window.dispatchEvent(event);
  }

  componentDidMount() {
    this.getProducts();
  }

  // Retrieves 5 products from productsAll (results of getProducts db query) and assigns them to productsFive
  getFive() {
    const getFive = this.state.productsAll.slice(
      this.state.counter,
      this.state.counter + 5
    );
    this.setState({ productsFive: getFive });
    console.log("getFive =", this.state.productsFive);
  }

  // Gets all products in db that match categoryId (0 being all) and assigns them to productsAll
  getProducts() {
    axios
      .get(
        `https://saskatchewanazon-carousel.herokuapp.com/getProducts/${this.state.productId}`
      )
      .then(response => {
        this.setState({ productsAll: response.data });
      })
      .then(() => {
        this.state.productsNumber = this.state.productsAll.length;
        this.getFive();
      })
      .catch(error => {
        console.log(error);
      });
  }

  goToProduct() {
    this.setState({ productId: event.target.id }, () => {
      console.log("Insert go to Product Page function here");
      console.log(`state.productId = ${this.state.productId}`);
      this.getProducts();
    });
  }

  goToRating() {
    this.setState({ productId: event.target.id }, () => {
      console.log("Insert go to Ratings Page function here");
      console.log(`state.productId = ${this.state.productId}`);
      this.state.counter = 0;
      this.getProducts();
    });
  }

  // Increments state.counter and loads next 5 items when right button clicked
  nextFive() {
    let nextCounter = 0;
    if (!(this.state.counter + 5 >= this.state.productsNumber)) {
      nextCounter = this.state.counter + 5;
    }
    this.setState({ counter: nextCounter }, () => {
      this.getFive();
    });
  }

  // Decrements state.counter and loads last 5 items when left button clicked
  lastFive() {
    let lastCounter = 0;
    if (this.state.counter - 5 < 0) {
      if (this.state.productsNumber % 5 === 0) {
        lastCounter = this.state.productsNumber - 5;
      } else {
        lastCounter =
          this.state.productsNumber - (this.state.productsNumber % 5);
      }
    } else {
      lastCounter = this.state.counter - 5;
    }
    this.setState({ counter: lastCounter }, () => {
      this.getFive();
    });
  }

  resetProducts() {
    this.setState({ productId: 0, counter: 0 }, () => {
      this.getProducts();
    });
  }

  render() {
    return (
      <div>
        <Carousel
          productsFive={this.state.productsFive}
          nextFive={this.nextFive}
          lastFive={this.lastFive}
          counter={this.state.counter}
          productsNumber={this.state.productsNumber}
          goToProduct={this.goToProduct}
          goToRating={this.goToRating}
        />
        <button onClick={this.resetProducts} type="button">
          See All Products
        </button>
      </div>
    );
  }
}
