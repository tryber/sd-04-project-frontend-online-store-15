import React, { Component } from 'react';

class QuantitySelector extends Component {
  constructor() {
    super();

    this.state = { selectedQuantity: 0 };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.handleChange('increase');
  }

  handleChange(operation) {
    const { availability, onChange } = this.props;
    const { selectedQuantity } = this.state;
    let quantity = selectedQuantity;

    switch (operation) {
      case 'increase':
        if (selectedQuantity < availability) {
          onChange('increase');
          quantity += 1;
        }
        break;
      case 'decrease':
        if (selectedQuantity > 1) {
          onChange('decrease');
          quantity -= 1;
        }
        break;
    }

    this.setState({ selectedQuantity: quantity });
  }

  render() {
    const { selectedQuantity } = this.state;

    return (
      <div className="quantity-selector">
        <div className="selector">
          <button
            type="button"
            data-testid="product-decrease-quantity"
            onClick={() => this.handleChange('decrease')}
          >
            -
          </button>
          <span data-testid="shopping-cart-product-quantity">{selectedQuantity}</span>
          <button
            type="button"
            data-testid="product-increase-quantity"
            onClick={() => this.handleChange('increase')}
          >
            +
          </button>
        </div>
      </div>
    );
  }
}

export default QuantitySelector;
