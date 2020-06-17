import React, { Component } from 'react';
import * as Api from '../services/api';
import Category from '../components/Category';
import SearchBar from '../components/SearchBar';
import { Link } from 'react-router-dom';

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

  render() {
    const { categories } = this.state;
    return (
      <div
        data-testid="home-initial-message"
      >
        <SearchBar />
        <Link data-testid="shopping-cart-button" to="/shopCart">Botão CARRINHO</Link>
        <Category categories={categories} />
      </div>
    );
  }
}

export default MainScreen;
