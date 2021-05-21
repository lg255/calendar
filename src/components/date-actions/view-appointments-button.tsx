import React, { useContext } from 'react';
import EditIcon from '../../svg-icons/edit-icon';
import CalendarContext from '../../context/calendar-context';
import ViewAppointments from './view-appointments/view-appointments';

const ViewAppointmentsButton: React.FunctionComponent<{
  canOpenAppointmentsModal: boolean;
}> = (props) => {
  const { canOpenAppointmentsModal } = props;
  const { selectedDay, setModalOptions } = useContext(CalendarContext);

  return (
    <div
      className="view-appointments-button"
      onClick={(e) => {
        if (canOpenAppointmentsModal) {
          e.stopPropagation();
          setModalOptions({
            open: true,
            content: <ViewAppointments selectedDay={selectedDay} />,
          });
        }
      }}
    >
      {EditIcon}
    </div>
  );
};

export default ViewAppointmentsButton;
