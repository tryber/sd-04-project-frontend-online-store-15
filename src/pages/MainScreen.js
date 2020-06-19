import React, { Component } from 'react';

import '../styles/MainScreen.css';

import * as Api from '../services/api';
import { Category, SearchBar, ProductsList } from '../components';
import Details from './ProductDetails';
import Cart from './Cart';

import { cartIcon } from '../icons';

class MainScreen extends Component {
  constructor() {
    super();
    this.state = {
      categories: [],
      selectedCategory: '',
      searchQuery: '',
    };

    this.updateState = this.updateState.bind(this);
    this.toggleCart = this.toggleCart.bind(this);
  }

  componentDidMount() {
    Api.getCategories().then((categories) => this.setState({ categories }));
  }

  updateState(state, info) {
    this.setState({ [state]: info });
  }

  toggleCart() {
    this.setState((state) => ({ cart: !state.cart }));
  }

  render() {
    const { categories, searchQuery, selectedCategory, product, cart } = this.state;
    return (
      <div className="main-screen">
        <header>
          <h1 className="header-title">My Store</h1>
          <SearchBar onSearch={this.updateState} />
          <button
            type="button"
            data-testid="shopping-cart-button"
            className="cart-button"
            onClick={this.toggleCart}
          >
            <span>Cart</span>
            <img src={cartIcon} alt="Cart Icon" />
          </button>
        </header>
        {cart && <Cart />}
        {product ? <Details product={product} />
          : (
            <div>
              <div className="product-list">
                <ProductsList
                  categoryId={selectedCategory}
                  query={searchQuery}
                  handleClick={this.updateState}
                />
              </div>
              <Category categories={categories} change={this.updateState} />
            </div>
          )}
      </div>
    );
  }
}

export default MainScreen;
