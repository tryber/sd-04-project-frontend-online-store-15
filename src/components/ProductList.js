import React, { Component } from 'react';

export class ProductList extends Component {
  constructor(props) {
    super(props);

    this.state = { searchText: props.searchText };
  }

  componentDidMount = () => {
    const { searchText } = this.state;
  };

  render() {
    return <div />;
  }
}

export default ProductList;
