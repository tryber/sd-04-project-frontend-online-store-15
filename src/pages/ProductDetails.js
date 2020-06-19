import React, { Component } from 'react';
import * as Api from '../services/api';

class Details extends Component {
  async componentDidMount() {
    // Recebe os detalhes via api utilizando id passado no Path
    Api.getDetails(this.props.id).then((data) => {
      const { title, price, pictures, attributes, available_quantity: available } = data;
      this.setState({ title, price, available, pictures, attributes });
    });
  }

  render() {
    if (this.state) {
      const { title, price, available, pictures, attributes } = this.state;
      return (
        <div>
          <h1 data-testid="product-detail-name">{title}</h1>
          <img src={pictures[0].url} alt="Product" />
          <p>
            R$ {price}
          </p>
          <p>
            Avaliable: {available}
          </p>
          <ul className="attributes">
            {attributes.map((atr) => (
              <li key={atr.id}>
                {atr.name}: {atr.value_name}
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
