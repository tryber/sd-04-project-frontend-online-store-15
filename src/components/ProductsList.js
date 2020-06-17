import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import * as api from '../services/api';

export class ProductList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: props.query,
      categorieId: props.categorieId,
      products: [],
      redirectToProduct: '',
    };
  }

  componentDidMount() {
    this.getProducts();
  }

  getProducts() {
    const { categorieId, query } = this.state;

    api
      .getProductsFromCategoryAndQuery(categorieId, query)
      .then((data) => this.setState({ products: data.results }));
  }

  handleProductClick(id) {
    this.setState({ redirectToProduct: id });
  }

  render() {
    const { products, redirectToProduct } = this.state;

    if (redirectToProduct) return <Redirect to={`details/${redirectToProduct}`} />;

    return (
      <div>
        {products.map((product) => (
          <div
            data-testid="product"
            key={product.id}
            className="product-card"
            onClick={() => this.handleProductClick(product.id)}
          >
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
