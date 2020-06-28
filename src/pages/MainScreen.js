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
    let cartState = {
      cartList: [],
      quantityItemsCart: 0,
    };
    if (localStorage.cartState) {
      cartState = JSON.parse(localStorage.cartState);
    }
    this.state = {
      categories: [],
      selectedCategory: '',
      searchQuery: '',
      ...cartState,
    };

    this.updateState = this.updateState.bind(this);
    this.toggleCart = this.toggleCart.bind(this);
    this.renderHeader = this.renderHeader.bind(this);
    this.addCartItem = this.addCartItem.bind(this);
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

  addCartItem(product, event) {
    this.setState((state) => {
      const cartState = {
        cartList: [...state.cartList, product],
        quantityItemsCart: state.quantityItemsCart + 1,
      };
      localStorage.cartState = JSON.stringify(cartState);
      return cartState;
    });
    if (event) event.stopPropagation();
  }

  renderHeader() {
    const { quantityItemsCart } = this.state;

    return (
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
          <span data-testid="shopping-cart-size">{quantityItemsCart}</span>
        </button>
      </header>
    );
  }

  render() {
    const { categories, searchQuery, selectedCategory, product, cart, cartList } = this.state;
    return (
      <div className="main-screen">
        {this.renderHeader()}
        {cart && <Cart list={cartList} onItemsChange={this.updateState} />}
        {product && (
          <Details product={product} onClick={this.updateState} addCartItem={this.addCartItem} />
        )}
        <div className="content">
          <Category categories={categories} change={this.updateState} />
          <div className="product-list">
            <ProductsList
              categoryId={selectedCategory}
              query={searchQuery}
              handleClick={this.updateState}
              addCartItem={this.addCartItem}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default MainScreen;
