import React, { Component } from 'react';

class ProductResume extends Component {
  render() {
    const { handleProductClick, product, product: { thumbnail, price, title } } = this.props;
    return (
      <div data-testid="product" className="card">
        <div
          className="card-product"
          data-testid="product-detail-link"
          onClick={() => handleProductClick('product', product)}
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
