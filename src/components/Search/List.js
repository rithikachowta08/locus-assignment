import React, { Component } from 'react';
import PropTypes from 'prop-types';
import User from '../User/User';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      focusedUser: 0,
      scrollIntoView: false
    };
    this.userRef = React.createRef();
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.focusedUser !== prevState.focusedUser &&
      this.state.scrollIntoView
    ) {
      this.ensureFocusedItemVisible();
    }
  }

  ensureFocusedItemVisible() {
    this.userRef.current && this.userRef.current.scrollIntoView(false); // false aligns dom node to the bottom
  }

  handleKeyPress = e => {
    // up arrow
    this.setState({ scrollIntoView: true });
    if (e.keyCode === 38) {
      this.setState(state => {
        const currentFocus = state.focusedUser;
        const focusedUser = currentFocus <= 0 ? 0 : currentFocus - 1;
        return {
          focusedUser
        };
      });
    }
    // down arrow
    if (e.keyCode === 40) {
      this.setState(state => {
        const currentFocus = state.focusedUser;
        const focusedUser =
          currentFocus >= this.props.users.length
            ? this.props.users.length
            : currentFocus + 1;
        return {
          focusedUser
        };
      });
    }
  };

  handleMouseEvent = id => {
    this.userRef.current && this.userRef.current.focus();
    this.setState({ focusedUser: parseInt(id), scrollIntoView: false });
  };

  render() {
    const listElements = this.props.users.map((user, index) => {
      const focused = index === this.state.focusedUser;

      return (
        <User
          divId={index}
          data={user}
          focused={focused}
          ref={focused && this.userRef}
          handleKeyPress={this.handleKeyPress}
          handleMouseEvent={this.handleMouseEvent}
        />
      );
    });
    return <div className="result-list">{listElements}</div>;
  }
}

List.propTypes = {
  users: PropTypes.array.isRequired
};

export default List;
