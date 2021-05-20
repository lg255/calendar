import React, { useContext } from 'react';
import CalendarContext from './../../../context/calendar-context';

const UserInfo: React.FunctionComponent = () => {
  const { currentUser } = useContext(CalendarContext);

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
