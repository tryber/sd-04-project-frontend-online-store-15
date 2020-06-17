import React, { Component } from 'react';

class Category extends Component {
  render() {
    const { categories } = this.props;

    return categories.map(({ id, name }) => (
      <div
        data-testid="category"
        key={id}
      >
        <button type="button">{name}</button>
      </div>
    ));
  }
}

export default Category;
