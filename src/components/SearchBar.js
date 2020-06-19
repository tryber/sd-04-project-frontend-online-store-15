import React, { Component } from 'react';

import { searchIcon } from '../icons';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { searchText: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ searchText: event.target.value });
  }

  handleSubmit(event) {
    const { searchText } = this.state;
    const { onSearch } = this.props;

    event.preventDefault();
    onSearch('selectedCategory', searchText);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="search-form">
        <input
          className="input-form"
          type="text"
          placeholder="Search"
          data-testid="query-input"
          name="searchInput"
          onChange={this.handleChange}
        />
        <button className="button-form" type="submit" data-testid="query-button" id="search-btn">
          <img className="img-form" src={searchIcon} alt="search icon" />
        </button>
      </form>

    );
  }
}

export default SearchBar;
