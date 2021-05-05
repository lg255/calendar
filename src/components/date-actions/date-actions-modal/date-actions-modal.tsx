import React, { useContext } from 'react';
import CalendarContext from '../../../context/calendar-context';
import moment from 'moment';
import './date-actions-modal.css';

const DateActionsModal: React.FunctionComponent<{
  visible: boolean;
  selectedDay: Date | null | undefined;
}> = (props) => {
  const { visible, selectedDay } = props;
  const { setShowModal } = useContext(CalendarContext);

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
          <div className="modal-closer" onClick={(e) => setShowModal(false)}>
            X
          </div>
        </div>
      </div>
    </>
  );
};

export default DateActionsModal;
