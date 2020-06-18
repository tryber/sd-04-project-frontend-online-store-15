import React, { Component } from 'react';

class Category extends Component {
  render() {
    const { categories, change } = this.props;

    return (
      <div className="categoriesList">
        {
          categories.map(({ id, name }) => (
            <div
              data-testid="category"
              key={id}
            >
              <button type="button" onClick={() => change(id)}>{name}</button>
            </div>
          ))
        }
      </div>
    );
  }
}

export default Category;
