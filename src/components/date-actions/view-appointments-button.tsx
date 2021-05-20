import React, { useContext } from 'react';
import EditIcon from '../../svg-icons/edit-icon';
import CalendarContext from '../../context/calendar-context';

const ViewAppointmentsButton: React.FunctionComponent<any> = (props) => {
  const { setShowModal } = useContext(CalendarContext);

  return (
    <div
      className="view-appointments-button"
      onClick={(e) => {
        e.stopPropagation();
        setShowModal(true);
      }}
    >
      {EditIcon}
    </div>
  );
};

export default ViewAppointmentsButton;
