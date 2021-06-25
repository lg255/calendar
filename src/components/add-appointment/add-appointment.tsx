import React, { useContext } from 'react';
import { CalendarContext } from '../../context/calendar-provider';
import AddAppointmentForm from './add-appointment-form';

const AddAppointment: React.FunctionComponent<any> = (props) => {
  const { setModalOptions } = useContext(CalendarContext);

  return (
    <div
      className="add-appointment"
      onClick={(e) => {
        setModalOptions({
          open: true,
          content: <AddAppointmentForm />,
          title: 'Neuen Termin hinzufügen',
        });
      }}
    >
      <div className="add-appointment-button">+</div>
    </div>
  );
};

export default AddAppointment;
