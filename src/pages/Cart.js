import React, { Component } from 'react';
import '../styles/Cart.css';
import { ResumeCart } from '../components';

class Cart extends Component {
  render() {
    const { list } = this.props;
    let total = 0;
    if (list.length === 0) {
      return (
        <div className="cart-list">
          <p data-testid="shopping-cart-empty-message">
            Seu carrinho está vazio
          </p>
        </div>
      );
    }
    return (
      <div className="cart-list">
        {list.map((i) => {
          total += i.price;
          return <ResumeCart key={i.id} data={i} />;
        })}
        <div>Total: R$ {Math.round(total * 100) / 100}</div>
      </div>
    );
  }
}

export default Cart;
