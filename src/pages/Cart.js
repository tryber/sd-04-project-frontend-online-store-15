import React, { Component } from 'react';
import '../styles/Cart.css';

class Cart extends Component {
  render() {
    return (
      <div className="cart">
        <p data-testid="shopping-cart-empty-message">
          Seu carrinho está vazio
        </p>
      </div>
    );
  }
}

export default Cart;
