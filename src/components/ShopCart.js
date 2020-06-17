import React, { Component } from 'react';

import SearchBar from './SearchBar';

class ShopCart extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <button data-testid="shopping-cart-button" type="button">Botão CARRINHO</button>
      </div>
    );
  }
}

export default ShopCart;
