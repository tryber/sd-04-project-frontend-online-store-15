import React, { Component } from 'react';

class Details extends Component {
  componentDidMount() {
    fetch('https://api.mercadolibre.com/items/MLB1191972200')
      .then((res) => res.json())
      .then((details) => {
        const { title, price, currency_id: currency, available_quantity: available, pictures } = details;
        this.setState({ title, price, currency, available, pictures });
      });
  }

  render() {
    if (this.state) {
      const { title, price, currency, available, pictures } = this.state;
      return (
        <div>
          <h1 data-testid="product-detail-name">{title}</h1>
          <img src={pictures[0].url} alt="Product" />
          <p>
            {currency}:
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
