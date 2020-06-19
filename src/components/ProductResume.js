import React, { Component } from 'react';
import { cartDownIcon } from '../icons';

class ProductResume extends Component {
  render() {
    const { handleProductClick, product, product: { thumbnail, price, title }, addNewItem } = this.props;
    return (
      <div data-testid="product" className="card">
        <div
          className="card-product"
          data-testid="product-detail-link"
          onClick={() => handleProductClick('product', product)}
        >
          <img src={thumbnail} alt="product" />
          <span className="card-title">{title}</span>
          <div
            data-testid="product-add-to-cart"
            className="card-price"
            onClick={(e) => addNewItem(e, product)}
          >
            <img src={cartDownIcon} alt="add to Cart" /> {`R$ ${price}`}
          </div>
        </div>
      </div>
    );
  }
}

export default ProductResume;
