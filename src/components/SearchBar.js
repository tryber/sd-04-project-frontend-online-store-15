import React, { Component } from 'react';

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
      <header>
        <nav className="searchBar">
          <h1 className="">Search</h1>
        </nav>
        <div className="search">
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              data-testid="query-input"
              name="searchInput"
              onChange={this.handleChange}
            />
            <button type="submit" data-testid="query-button" id="search-btn">
              Procurar
            </button>
          </form>
        </div>
      </header>
    );
  }
}

export default SearchBar;
