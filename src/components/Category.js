import React, { Component } from 'react';

class Category extends Component {
  render() {
    const { categories } = this.props;

    return (
      <div className="categoriesList">
        {
          categories.map(({ id, name }) => (
            <div
              data-testid="category"
              key={id}
            >
              <button type="button">{name}</button>
            </div>
          ))
        }
      </div>
    );
  }
}

export default Category;
