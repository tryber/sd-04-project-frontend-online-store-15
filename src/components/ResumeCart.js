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
    const { data: { title, price, thumbnail, available_quantity: available } } = this.props;
    return (
      <div className="cart-item">
        <img src={thumbnail} alt="product thumbnail" />
        <div className="item-info">
          <p data-testid="shopping-cart-product-name">{title}</p>
          <p>R$ {price}</p>
          <div>
            Quantity:
            <QuantitySelector availability={available} onChange={this.handleQuantitySelection} />
          </div>
          <p>Available: {available}</p>
        </div>
      </div>
    );
  }
}

export default ResumeCart;
