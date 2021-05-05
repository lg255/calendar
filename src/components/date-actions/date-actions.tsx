import React, { useContext } from 'react';

import './date-actions.css';
import EditIcon from '../../svg-icons/edit-icon';
import CalendarContext from '../../context/calendar-context';

const DateActions: React.FunctionComponent<any> = (props) => {
  const { setShowModal } = useContext(CalendarContext);

  return (
    <div
      className="date-actions"
      onClick={(e) => {
        e.stopPropagation();
        setShowModal(true);
      }}
    >
      {EditIcon}
    </div>
  );
};

export default DateActions;
