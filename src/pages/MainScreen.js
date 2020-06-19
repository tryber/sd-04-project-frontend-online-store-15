import React, { Component } from 'react';
import { Link as button } from 'react-router-dom';

import '../styles/MainScreen.css';

import * as Api from '../services/api';
import { Category, SearchBar, ProductsList } from '../components';

import { cartIcon } from '../icons';

class MainScreen extends Component {
  constructor() {
    super();
    this.state = {
      categories: [],
      selectedCategory: '',
      searchQuery: '',
    };

    this.handleSearch = this.handleSearch.bind(this);
    this.changeCategory = this.changeCategory.bind(this);
  }

  componentDidMount() {
    Api.getCategories().then((categories) => this.setState({ categories }));
  }

  handleSearch(searchText) {
    this.setState({ searchQuery: searchText });
  }

  changeCategory(id) {
    this.setState({ selectedCategory: id });
  }

  render() {
    const { categories, searchQuery, selectedCategory } = this.state;

    return (
      <div className="main-screen">
        <header>
          <h1 className="header-title">My Store</h1>
          <SearchBar onSearch={this.handleSearch} />
          <button type="button" data-testid="shopping-cart-button" className="cart-button">
            <span>Cart</span>
            <img src={cartIcon} alt="Cart Icon" />
          </button>
        </header>
        <div className="product-list">
          <ProductsList categoryId={selectedCategory} query={searchQuery} />
        </div>
        <Category categories={categories} change={this.changeCategory} />
      </div>
    );
  }
}

export default MainScreen;
