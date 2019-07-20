import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Items from './Items';
import Address from './Address';
import './User.scss';

const User = props => {
  const { id, name, items, address, pincode } = props.data;
  return (
    <div className="user">
      <Header id={id} name={name} />
      <Items items={items} />
      <Address address={address} pincode={pincode} />
    </div>
  );
};

User.propTypes = {
  data: PropTypes.object.isRequired
};

export default User;
