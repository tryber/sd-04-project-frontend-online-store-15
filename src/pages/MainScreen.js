import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as Api from '../services/api';
import { Category, SearchBar, ProductsList } from '../components';

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
      <div>
        <SearchBar onSearch={this.handleSearch} />
        <Link data-testid="shopping-cart-button" to="/shopCart">
          Botão CARRINHO
        </Link>
        <ProductsList categoryId={selectedCategory} query={searchQuery} />
        <Category categories={categories} change={this.changeCategory} />
      </div>
    );
  }
}

export default MainScreen;
