import React, { useContext } from 'react';
import { UserContext } from '../../../context/user-provider';

const UserInfo: React.FunctionComponent = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <div className="user-info">
      {currentUser ? (
        <div
          className="user-photo"
          style={{ backgroundImage: 'url(' + (currentUser.photo || '') + ')' }}
        ></div>
      ) : (
        ''
      )}
    </div>
  );
};

export default UserInfo;
