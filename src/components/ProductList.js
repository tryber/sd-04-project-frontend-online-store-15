import React, { Component } from 'react';

export class ProductList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchQuery: props.search,
      productCategorie: prop.category,
    };
  }

  componentDidMount = () => {
    const { searchQuery, productCategorie } = this.state;
  };

  render() {
    return <div />;
  }
}

export default ProductList;
