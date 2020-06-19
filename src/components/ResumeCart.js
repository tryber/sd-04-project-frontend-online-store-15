import React, { Component } from 'react';

class ResumeCart extends Component {
  render() {
    const { data: { title, price, thumbnail, available_quantity: available } } = this.props;
    return (
      <div className="cart-item">
        <img src={thumbnail} alt="product thumbnail" />
        <div className="item-info">
          <p data-testid="shopping-cart-product-name">{title}</p>
          <p>R$ {price}</p>
          <p>Quantity: <span data-testid="shopping-cart-product-quantity">{1}</span></p>
          <p>Available: {available}</p>
        </div>
      </div>
    );
  }
}

export default ResumeCart;
