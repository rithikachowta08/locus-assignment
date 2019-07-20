import React, { Component } from 'react';
import PropTypes from 'prop-types';
import User from '../User/User';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      focusedUser: ''
    };
  }

  handleKeyPress = e => {
    const userDivs = document.getElementsByClassName('user');
    const targetId = parseInt(e.target.id);
    if (e.keyCode === 38) {
      userDivs[targetId - 1] && userDivs[targetId - 1].focus();
      this.setState({ focusedUser: targetId - 1 });
    } else if (e.keyCode === 40) {
      userDivs[targetId + 1] && userDivs[targetId + 1].focus();
      this.setState({ focusedUser: targetId + 1 });
    }
  };

  handleMouseEvent = id => {
    this.setState({ focusedUser: parseInt(id) });
  };

  render() {
    const listElements = this.props.users.map((user, index) => (
      <User
        divId={index}
        data={user}
        focused={index === this.state.focusedUser}
        handleKeyPress={this.handleKeyPress}
        handleMouseEvent={this.handleMouseEvent}
      />
    ));
    return <div className="result-list">{listElements}</div>;
  }
}

List.propTypes = {
  users: PropTypes.array.isRequired
};

export default List;
