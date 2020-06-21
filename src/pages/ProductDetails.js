import React, { Component } from 'react';
import { cartDownIcon } from '../icons';
import '../styles/ProductDetails.css';

class Details extends Component {
  renderInfo() {
    const { product: { price, available_quantity: available }, addCartItem, product } = this.props;
    return (
      <div>
        <span className="product-price">
          R$ {price}
        </span>
        <span>
          Avaliable: {available}
        </span>
        <button
          className="product-cart"
          type="button"
          data-testid="product-detail-add-to-cart"
          onClick={(e) => addCartItem(e, product)}
        >
          Add to Cart <img src={cartDownIcon} alt="add to cart" />
        </button>
      </div>
    );
  }

  render() {
    const { product: { title, thumbnail, attributes }, onClick } = this.props;
    return (
      <div className="product-details">
        <button className="close" type="button" onClick={() => onClick('product')}>X</button>
        <h1 className="product-title" data-testid="product-detail-name">{title}</h1>
        <img src={thumbnail} alt="Product" />
        <div className="product-info">
          <ul className="attributes">
            {attributes.map((atr) => (
              <li key={atr.id}>
                {atr.name}: {atr.value_name}
              </li>
            ))}
          </ul>
          {this.renderInfo()}
          <form className="evaluation" action="">
            <textarea
              placeholder="Text"
              name="evaluation"
              cols="30"
              rows="10"
              data-testid="product-detail-evaluation"
            />
            <button type="submit">Avaliar</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Details;
