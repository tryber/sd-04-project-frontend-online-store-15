import React, { Component } from 'react';

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
          <span className="card-price">{`R$ ${price}`}</span>
          <button
            data-testid="product-add-to-cart"
            type="button"
            onClick={addNewItem}
          >
            Adicionar ao carrinho
          </button>
        </div>
      </div>
    );
  }
}

export default ProductResume;
