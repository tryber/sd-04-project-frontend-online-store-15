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
    this.saveCartTotal = this.saveCartTotal.bind(this);
    this.loadCartTotal = this.loadCartTotal.bind(this);
  }

  componentDidMount() {
    this.loadCartTotal();
  }

  redirectToTarget() {
    const { history, list } = this.props;
    history.push({ pathname: '/checkout', list });
  }

  loadCartTotal() {
    this.setState(
      {
        productsTotal: JSON.parse(localStorage.getItem('cartState')).quantityItemsCart,
        cartTotal: JSON.parse(localStorage.getItem('cartState')).totalPrice,
      },
    );
  }

  saveCartTotal() {
    const { cartTotal, productsTotal } = this.state;
    const cart = JSON.parse(localStorage.getItem('cartState'));
    cart.quantityItemsCart = productsTotal;
    cart.totalPrice = cartTotal;
    localStorage.setItem('cartState', JSON.stringify(cart));
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
            this.saveCartTotal();
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
            this.saveCartTotal();
          },
        );
        break;
    }
  }

  renderCartList() {
    const { list } = this.props;
    return (
      <div className="cart-list">
        {list.map((i) => (
          <ResumeCart key={i.id} data={i} onQuantityChange={this.updateCartTotal} />))}
      </div>
    );
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
        {this.renderCartList()}
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
