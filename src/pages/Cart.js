import React, { Component } from 'react';
import '../styles/Cart.css';
import { ResumeCart } from '../components';

class Cart extends Component {
  constructor(props) {
    super(props);

    this.state = { cartTotal: 0, productsTotal: 0 };

    this.updateCartTotal = this.updateCartTotal.bind(this);
  }

  updateCartTotal(operation, productPrice) {
    const { onItemsChange } = this.props;

    switch (operation) {
      case 'increase':
        this.setState(
          (prevState) => ({
            cartTotal: prevState.cartTotal + productPrice,
            productsTotal: prevState.productsTotal + 1,
          }), () => {
            const { productsTotal } = this.state;
            onItemsChange('quantityItemsCart', productsTotal);
          },
        );
        break;
      case 'decrease':
        this.setState(
          (prevState) => ({
            cartTotal: prevState.cartTotal - productPrice,
            productsTotal: prevState.productsTotal - 1,
          }), () => {
            const { productsTotal } = this.state;
            onItemsChange('quantityItemsCart', productsTotal);
          },
        );
        break;
    }
  }

  render() {
    const { list } = this.props;
    const { cartTotal } = this.state;

    if (list.length === 0) {
      return (
        <div className="cart-list">
          <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
        </div>
      );
    }
    return (
      <div className="cart-list">
        {list.map((i) => (
          <ResumeCart key={i.id} data={i} onQuantityChange={this.updateCartTotal} />
        ))}
        <div>Total: R$ {Math.round(cartTotal * 100) / 100}</div>
      </div>
    );
  }
}

export default Cart;
