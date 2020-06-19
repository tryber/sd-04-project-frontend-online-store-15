import React, { Component } from 'react';

class Details extends Component {
  render() {
    const {
      title, price, thumbnail, attributes,
      currency_id: currency, available_quantity: available,
    } = this.props.product;
    return (
      <div>
        <h1 data-testid="product-detail-name">{title}</h1>
        <img src={thumbnail} alt="Product" />
        <p>
          {currency}
          :
          {price}
        </p>
        <p>
          Avaliable:
          {available}
        </p>
        <ul className="attributes">
          {attributes.map((atr) => (
            <li key={atr.id}>
              {atr.name}
              :
              {atr.value_name}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Details;
