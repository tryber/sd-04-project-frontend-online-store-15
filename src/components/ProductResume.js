import React, { Component } from 'react';

class ProductResume extends Component {
  render() {
    const { handleProductClick, product: { id, thumbnail, price, title } } = this.props;
    return (
      <div data-testid="product" className="card">
        <div
          className="card-product"
          data-testid="product-detail-link"
          onClick={() => handleProductClick('product', id)}
        >
          <img src={thumbnail} alt="product" />
          <span className="card-title">{title}</span>
          <span className="card-price">{`R$ ${price}`}</span>
        </div>
      </div>
    );
  }
}

export default ProductResume;
