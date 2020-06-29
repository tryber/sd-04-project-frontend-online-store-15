import React, { Component } from 'react';

class CheckoutPage extends Component {
  getCart() {
    return JSON.parse(localStorage.getItem('cartState'));
  }

  checkoutForm() {
    return (
      <div>
        <form>
          <input
            placeholder="Nome completo"
            data-testid="checkout-fullname"
            formNoValidate
          />
          <input
            placeholder="Email"
            data-testid="checkout-email"
            formNoValidate
          />
          <input placeholder="CPF" data-testid="checkout-cpf" formNoValidate />
          <input
            placeholder="Telefone"
            data-testid="checkout-phone"
            formNoValidate
          />
          <input placeholder="CEP" data-testid="checkout-cep" formNoValidate />
          <input
            placeholder="Endereço"
            data-testid="checkout-address"
            formNoValidate
          />
          <button
            type="button"
            onClick={() => this.window.alert('Compra Finalizada')}
          >
            Finalizar compra
          </button>
        </form>
      </div>
    );
  }

  render() {
    const { location: { list } } = this.props;
    return (
      <div>
        <h1>Revise seus produtos</h1>
        {list.map((element) => (
          <div key={element.id}>
            <p>{element.title}</p>
            <p>{element.price}</p>
          </div>
        ))}
        <h1>
          Total:
          {Math.round(
            (this.getCart().cartList.reduce(
              (total, product) => total + product.price * product.selected_quantity, 0
            )) * 100
          ) / 100}
        </h1>
        {this.checkoutForm()}
      </div>
    );
  }
}

export default CheckoutPage;
