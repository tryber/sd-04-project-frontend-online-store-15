import React, { Component } from 'react';
import * as Api from '../services/api';

class Details extends Component {
  async componentDidMount() {
    const {
      title, price, pictures, attributes,
      currency_id: currency, available_quantity: available,
    } = await Api.getDetails(this.props.match.params.id);
    this.setState({ title, price, currency, available, pictures, attributes });
  }

  render() {
    if (this.state) {
      const { title, price, currency, available, pictures, attributes } = this.state;
      return (
        <div>
          <h1 data-testid="product-detail-name">{title}</h1>
          <img src={pictures[0].url} alt="Product" />
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
    return <p>Loading...</p>;
  }
}

export default Details;
