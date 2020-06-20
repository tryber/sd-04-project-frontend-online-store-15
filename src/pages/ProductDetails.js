import React, { Component } from 'react';
import { cartDownIcon } from '../icons';
import '../styles/ProductDetails.css';

class Details extends Component {
  render() {
    const {
      product: {
        title, price, thumbnail,
        attributes, available_quantity: available,
      }, onClick, addCartItem, product,
    } = this.props;
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
        </div>
      </div>
    );
  }
}

export default Details;
