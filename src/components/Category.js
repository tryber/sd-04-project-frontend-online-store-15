import React, { Component } from 'react';
import '../styles/Category.css';

class Category extends Component {
  render() {
    const { categories, change } = this.props;

    return (
      <div className="categories">
        <h4>Categorias</h4>
        <div className="categories-list">
          {
            categories.map(({ id, name }) => (
              <button
                data-testid="category"
                key={id}
                type="button"
                onClick={() => change(id)}
              >
                {name}
              </button>
            ))
          }
        </div>
      </div>
    );
  }
}

export default Category;
