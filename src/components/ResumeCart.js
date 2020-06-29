import React, { Component } from 'react';
import QuantitySelector from './QuantitySelector';

class ResumeCart extends Component {
  constructor(props) {
    super(props);
    this.handleQuantitySelection = this.handleQuantitySelection.bind(this);
  }


  handleQuantitySelection(operation) {
    const { data, onQuantityChange } = this.props;

    onQuantityChange(operation, data.price);
  }

  render() {
    const { data: { id, title, price, thumbnail, available_quantity: available } } = this.props;
    return (
      <div className="cart-item">
        <div className="cart-product">
          <img src={thumbnail} alt="product thumbnail" />
          <span data-testid="shopping-cart-product-name">{title}</span>
        </div>
        <span>R$ {price}</span>
        <QuantitySelector
          productId={id}
          availability={available}
          onChange={this.handleQuantitySelection}
        />
        <span>{available}</span>
      </div>
    );
  }
}

export default ResumeCart;
