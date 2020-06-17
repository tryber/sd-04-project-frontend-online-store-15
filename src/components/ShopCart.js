import React, { Component } from 'react';

import SearchBar from './SearchBar';

class ShopCart extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <h1 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h1>
        <button data-testid="shopping-cart-button" type="button">Botão CARRINHO</button>
      </div>
    );
  }
}

export default ShopCart;
