import React from 'react';
import PropTypes from 'prop-types';
import Id from './Id';
import Name from './Name';
import Items from './Items';
import Address from './Address';
import './User.scss';

const User = props => {
  const { id, name, items, address, pincode } = props.data;
  let classes = 'user';
  if (props.focused) {
    classes += ' focused';
  }
  const handleMouseEvent = () => {
    props.handleMouseEvent(props.divId);
  };
  return (
    <div
      tabIndex="0"
      onKeyDown={props.handleKeyPress}
      id={props.divId}
      onMouseEnter={handleMouseEvent}
      className={classes}
    >
      <Id id={id} onMouseEnter={handleMouseEvent} />
      <Name name={name} onMouseEnter={handleMouseEvent} />
      <Items items={items} onMouseEnter={handleMouseEvent} />
      <Address
        address={address}
        pincode={pincode}
        onMouseEnter={handleMouseEvent}
      />
    </div>
  );
};

User.propTypes = {
  data: PropTypes.object.isRequired
};

export default User;
