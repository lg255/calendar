import React from 'react';

import './date-actions.css';
import EditIcon from '../../svg-icons/edit-icon';

const DateActions: React.FunctionComponent<any> = (props) => {
  return (
    <div
      className="date-actions"
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      {EditIcon}
    </div>
  );
};

export default DateActions;
