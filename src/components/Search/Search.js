import React, { Component } from 'react';
import SearchInput from './SearchInput';
import List from './List';
import EmptyResult from '../EmptyResult';
import users from '../../constants';
import './Search.scss';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentInput: '',
      users: []
    };
  }

  componentDidMount() {
    this.setState({ users });
  }

  filterByKeyword = e => {
    this.setState({ currentInput: e.target.value });
  };

  render() {
    const searchResults = this.state.users.length ? (
      <List users={users} />
    ) : (
      <EmptyResult message="No users found" />
    );
    return (
      <div className="search-container">
        <SearchInput
          currentInput={this.state.currentInput}
          changeHandler={this.filterByKeyword}
          placeholder="Search users by ID, address, name, items or pincode..."
        />
        {searchResults}
      </div>
    );
  }
}

export default Search;
