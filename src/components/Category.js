import React, { Component } from 'react';

class Category extends Component {
  render() {
    const { categories, change } = this.props;

    return (
      <div className="categoriesList">
        {
          categories.map(({ id, name }) => (
            <button
              data-testid="category"
              key={id}
              type="button"
              onClick={() => change('selectedCategory', id)}
            >
              {name}
            </button>
          ))
        }
      </div>
    );
  }
}

export default Category;
