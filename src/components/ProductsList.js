import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import * as Api from '../services/api';
import ProductResume from './ProductResume';

class ProductList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: undefined,
      redirectToProduct: '', // Redirect when ID is given
    };
    this.handleProductClick = this.handleProductClick.bind(this);
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
    if (!categoryId && !query) return;
    Api.getProductsFromCategoryAndQuery(categoryId, query)
      .then((data) => this.setState({ products: data.results }));
  }

  // Handle click on product card
  handleProductClick(id) {
    this.setState({ redirectToProduct: id });
  }

  render() {
    const { products, redirectToProduct } = this.state;
    // Redirect to Product Details
    if (redirectToProduct) return <Redirect to={`details/${redirectToProduct}`} />;
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
      <div>
        {products.map((product) => (
          <ProductResume
            key={product.id}
            handleProductClick={this.handleProductClick}
            product={product}
          />
        ))}
      </div>
    );
  }
}

export default ProductList;
