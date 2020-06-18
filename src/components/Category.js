import React, { Component } from 'react';
import * as Api from '../services/api';

class Category extends Component {
  render() {
    const { categories } = this.props;

    return categories.map(({ id, name }) => (
      <li
        data-testid="category"
        key={id}
      >
        <button type="button" onClick={Api.getProductsFromCategoryAndQuery}>{name}</button>
      </li>
    ));
  }
}

export default Category;
