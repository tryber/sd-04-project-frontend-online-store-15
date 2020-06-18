import React, { Component } from 'react';

class ProductResume extends Component {
  render() {
    const { handleProductClick, product: { id, thumbnail, price, title } } = this.props;
    return (
      <div data-testid="product" className="product-card">
        <div
          data-testid="product-detail-link"
          onClick={() => handleProductClick(id)}
        >
          <div className="product-title">{title}</div>
          <div className="product-info">
            <img src={thumbnail} alt="product" />
            <p>{`R$ ${price}`}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductResume;
