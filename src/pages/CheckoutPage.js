import React, { Component } from 'react';

class CheckoutPage extends Component {
  completedPurchase() {
    return window.alert('Compra Finalizada');
  }

  checkoutForm() {
    return (
      <div>
        <form>
          <input placeholder="Nome completo" data-testid="checkout-fullname" formNoValidate />
          <input placeholder="Email" data-testid="checkout-email" formNoValidate />
          <input placeholder="CPF" data-testid="checkout-cpf" formNoValidate />
          <input placeholder="Telefone" data-testid="checkout-phone" formNoValidate />
          <input placeholder="CEP" data-testid="checkout-cep" formNoValidate />
          <input placeholder="Endereço" data-testid="checkout-address" formNoValidate />
          <button type="button" onClick={() => this.completedPurchase()}>Finalizar compra</button>
        </form>
      </div>
    );
  }

  render() {
    const { location: { state: { cart } } } = this.props;
    return (
      <div>
        <h1>Revise seus produtos</h1>
        {cart.map((element) => (
          <div>
            <p>{element.title}</p>
            <p>{element.price}</p>
          </div>
        ))}
        <h1>
          Total:
          {Math.round(cart.map((inicial) => inicial.price).reduce((initial, acc) => initial + acc))}
        </h1>
        {this.checkoutForm()}
      </div>
    );
  }
}

export default CheckoutPage;
