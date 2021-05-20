import React, { useContext } from 'react';
import CalendarContext from '../../../context/calendar-context';
import moment from 'moment';

const DateActionsModal: React.FunctionComponent<{
  visible: boolean;
  selectedDay: Date;
}> = (props) => {
  const { visible, selectedDay } = props;
  const { setShowModal, appointments } = useContext(CalendarContext);

  const appointmentsForCurrentDay = appointments.filter((appointment) => {
    return moment(appointment.date).isSame(selectedDay, 'day');
  });

  return (
    <>
      <div
        className="modal-container"
        style={{
          visibility: visible ? 'visible' : 'hidden',
          opacity: visible ? 1 : 0,
        }}
      >
        <div
          className="modal-bg"
          style={{ opacity: visible ? 0.8 : 0 }}
          onClick={(e) => setShowModal(false)}
        ></div>
        <div className="modal-content">
          <h2>{moment(selectedDay).format('dddd, DD.MMMM.YYYY')}</h2>
          {appointmentsForCurrentDay.length > 0 ? (
            <ul>
              {appointmentsForCurrentDay.map((appointment, index) => (
                <li key={index}>
                  {appointment.description},{' '}
                  {appointment.date.toLocaleDateString()}
                </li>
              ))}
            </ul>
          ) : (
            ''
          )}
          <div className="modal-closer" onClick={(e) => setShowModal(false)}>
            X
          </div>
        </div>
      </div>
    </>
  );
};

export default DateActionsModal;
