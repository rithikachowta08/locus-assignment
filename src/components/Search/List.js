import React from 'react';
import PropTypes from 'prop-types';
import User from '../User/User';

const List = props => {
  const listElements = props.users.map(user => <User data={user} />);
  return <div>{listElements}</div>;
};

List.propTypes = {
  users: PropTypes.array.isRequired
};

export default List;
