import React, { Component } from 'react';
import * as api from '../services/api';

export class ProductList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: props.query,
      categorieId: props.categorieId,
      products: [],
    };
  }

  componentDidMount() {
    this.setState({ products: this.getProducts() });
  }

  getProducts() {
    const { query, categorieId } = this.state;
    let products = [];

    if (query && !categorieId) {
      products = api.getProductsFromCategoryAndQuery(null, query);
    } else if (!query && categorieId) {
      products = api.getProductsFromCategoryAndQuery(categorieId, null);
    } else {
      products = api.getProductsFromCategoryAndQuery(categorieId, query);
    }

    return products;
  }

  render() {
    const { products } = this.state;
    return (
      <div>
        {products.map((product) => (
          <div data-testid="product" className="product-card">
            <div className="product-title">{product.title}</div>
            <div className="product-info">
              <img src={product.thumbnail} alt="product" />
              <p>{`R$ ${product.price}`}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default ProductList;
