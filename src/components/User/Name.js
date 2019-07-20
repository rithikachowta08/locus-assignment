import React from 'react';
import PropTypes from 'prop-types';

const Name = props => {
  return <div onMouseEnter={props.onMouseEnter}>{props.name}</div>;
};

Name.propTypes = {
  name: PropTypes.string.isRequired
};

export default Name;
