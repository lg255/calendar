import React from 'react';
import Login from './login/login';
import UserInfo from './user-info/user-info';

const Header: React.FunctionComponent = () => {
  return (
    <div className="header-container">
      <Login />
      <UserInfo />
    </div>
  );
};

export default Header;
