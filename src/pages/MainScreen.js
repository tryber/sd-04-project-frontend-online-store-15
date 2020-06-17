import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as Api from '../services/api';
import Category from '../components/Category';
import SearchBar from '../components/SearchBar';
import ProductList from '../components/ProductsList';

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
      <div data-testid="home-initial-message">
        <SearchBar />
        <Link data-testid="shopping-cart-button" to="/shopCart">
          Botão CARRINHO
        </Link>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <Category categories={categories} />
        <ProductList categorieId="MLB1055" query="xiaomi" />
      </div>
    );
  }
}

export default MainScreen;
