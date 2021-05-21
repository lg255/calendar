import React, { useContext } from 'react';
import CalendarContext from '../../../context/calendar-context';
import moment from 'moment';

const ViewAppointments: React.FunctionComponent<{
  selectedDay: Date;
}> = (props) => {
  const { selectedDay } = props;
  const { appointments } = useContext(CalendarContext);

  const appointmentsForCurrentDay = appointments.filter((appointment) => {
    return moment(appointment.date).isSame(selectedDay, 'day');
  });

  return (
    <>
      {appointmentsForCurrentDay.length > 0 ? (
        <ul>
          {appointmentsForCurrentDay.map((appointment, index) => (
            <li key={index}>
              {appointment.description}, {appointment.date.toLocaleDateString()}
            </li>
          ))}
        </ul>
      ) : (
        ''
      )}
    </>
  );
};

export default ViewAppointments;
