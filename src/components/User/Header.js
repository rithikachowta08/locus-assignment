import React from 'react';
import PropTypes from 'prop-types';

const Header = props => {
  return (
    <div>
      <div>{props.id}</div>
      <div>{props.name}</div>
    </div>
  );
};

Header.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default Header;
