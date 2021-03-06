import React, { Component } from 'react';
import * as Api from '../services/api';
import ProductResume from './ProductResume';

import '../styles/ProductsList.css';

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = { products: undefined };
  }

  componentDidMount() {
    // GET products from Api with default props
    this.getProducts();
  }

  componentDidUpdate(prevProps) {
    const { query, categoryId } = this.props;
    // Check if any props has changed on component update
    if (prevProps.query !== query || prevProps.categoryId !== categoryId) {
      this.getProducts();
    }
  }

  // GET products from Api (params: categoryId, query)
  getProducts() {
    const { categoryId, query } = this.props;
    if (categoryId || query) {
      Api.getProductsFromCategoryAndQuery(categoryId, query)
        .then((data) => this.setState({ products: data.results }));
    }
  }

  render() {
    const { products } = this.state;
    const { handleClick, addCartItem } = this.props;
    // Return initial message
    if (!products) {
      return (
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      );
    }
    // Return No Results
    if (products.length === 0) {
      return <p>Nenhum resultado encontrado.</p>;
    }
    // Return products list
    return (
      products.map((product) => (
        <ProductResume
          key={product.id}
          handleProductClick={handleClick}
          product={product}
          addNewItem={addCartItem}
        />
      ))
    );
  }
}

export default ProductList;
