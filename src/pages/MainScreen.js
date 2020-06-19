import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as Api from '../services/api';
import { Category, SearchBar, ProductsList } from '../components';
import Details from './ProductDetails';

class MainScreen extends Component {
  constructor() {
    super();
    this.state = {
      categories: [],
      selectedCategory: '',
      searchQuery: '',
    };

    this.updateState = this.updateState.bind(this);
  }

  componentDidMount() {
    Api.getCategories().then((categories) => this.setState({ categories }));
  }

  updateState(state, info) {
    this.setState({ [state]: info });
  }

  render() {
    const { categories, searchQuery, selectedCategory, product } = this.state;
    if (product) return <Details product={product} />;
    return (
      <div>
        <SearchBar onSearch={this.updateState} />
        <Link data-testid="shopping-cart-button" to="/shopCart">
          Botão CARRINHO
        </Link>
        <ProductsList
          categoryId={selectedCategory}
          query={searchQuery}
          handleClick={this.updateState}
        />
        <Category categories={categories} change={this.updateState} />
      </div>
    );
  }
}

export default MainScreen;
