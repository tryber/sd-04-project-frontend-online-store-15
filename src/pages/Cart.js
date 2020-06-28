import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { ResumeCart } from '../components';
import '../styles/Cart.css';

class Cart extends Component {
  constructor(props) {
    super(props);

    this.state = { cartTotal: 0, productsTotal: 0 };

    this.updateCartTotal = this.updateCartTotal.bind(this);
    this.redirectToTarget = this.redirectToTarget.bind(this);
  }

  redirectToTarget() {
    const { history, list } = this.props;
    history.push({ pathname: '/checkout', list });
  }

  updateCartTotal(operation, productPrice) {
    const { onItemsChange } = this.props;

    switch (operation) {
      case 'increase':
        this.setState(
          (prevState) => ({
            cartTotal: prevState.cartTotal + productPrice,
            productsTotal: prevState.productsTotal + 1,
          }),
          () => {
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
          }),
          () => {
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
        <div className="cart">
          <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
        </div>
      );
    }
    return (
      <div className="cart">
        <div className="cart-header">
          <span>Product</span>
          <span>Price</span>
          <span>Quantity</span>
          <span>Avaliable</span>
        </div>
        <div className="cart-list">
          {list.map((i) => (
            <ResumeCart key={i.id} data={i} onQuantityChange={this.updateCartTotal} />))}
        </div>
        <div>Total: R$ {Math.round(cartTotal * 100) / 100}</div>
        <button
          type="button"
          data-testid="checkout-products"
          onClick={this.redirectToTarget}
        >
          Finalizar Compra
        </button>
      </div>
    );
  }
}

export default withRouter(Cart);
