import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import * as api from '../services/api';

class ProductList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      redirectToProduct: '', // Redirect when ID is given
    };
  }

  componentDidMount() {
    // GET products from api with default props
    this.getProducts();
  }

  componentDidUpdate(nextProps) {
    const { query } = this.props;

    // Check with any props has changed on component update
    if (nextProps.query !== query) {
      this.getProducts();
    }
  }

  // GET products from api (params: categoryId, query)
  getProducts() {
    const { categorieId, query } = this.props;

    api
      .getProductsFromCategoryAndQuery(categorieId, query)
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
