import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as Api from '../services/api';
import { Category, SearchBar } from '../components';

class MainScreen extends Component {
  constructor() {
    super();
    this.state = {
      categories: [],
      products: [],
      selectedCategory: '',
      searchQuery: '',
    };
  }

  componentDidMount() {
    Api.getCategories().then((categories) => this.setState({ categories }));
  }

  render() {
    const { categories } = this.state;
    return (
      <div>
        <SearchBar />
        <Link data-testid="shopping-cart-button" to="/shopCart">
          Botão CARRINHO
        </Link>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <Category categories={categories} />
      </div>
    );
  }
}

export default MainScreen;
