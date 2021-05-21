import React, { useContext } from 'react';
import EditIcon from '../../svg-icons/edit-icon';
import CalendarContext from '../../context/calendar-context';
import ViewAppointments from './view-appointments/view-appointments';
import moment from 'moment';

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
            title: `Termine am ${moment(selectedDay).format(
              'dddd, DD.MMMM.YYYY'
            )}`,
          });
        }
      }}
    >
      {EditIcon}
    </div>
  );
};

export default ViewAppointmentsButton;
