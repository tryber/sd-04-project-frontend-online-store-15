import React, { Component } from 'react';
import * as Api from '../services/api';

class Details extends Component {
  async componentDidMount() {
    const {
      title, price, pictures,
      currency_id: currency, available_quantity: available,
    } = await Api.getDetails(this.props.match.params.id);
    this.setState({ title, price, currency, available, pictures });
  }

  render() {
    if (this.state) {
      const { title, price, currency, available, pictures } = this.state;
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
        </div>
      );
    }
    return <p>Loading...</p>;
  }
}

export default Details;
