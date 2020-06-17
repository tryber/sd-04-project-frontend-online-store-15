import React, { Component } from 'react';
import * as Api from '../services/api';
import ShopCart from './ShopCart';
import Category from './Category';

class MainScreen extends Component {
  constructor() {
    super();
    this.state = {
      categories: [],
      products: [],
    };
  }

  componentDidMount() {
    Api.getCategories().then((categories) => this.setState({ categories }));
  }

  handleClickCategory() {}

  render() {
    const { categories } = this.state;
    return (
      <div
        data-testid="home-initial-message"
      >
        <ShopCart />
        <Category categories={categories} />
      </div>
    );
  }
}

export default MainScreen;