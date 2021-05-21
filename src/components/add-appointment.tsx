import React, { useContext } from 'react';
import AddAppointmentForm from './add-appointment-form';
import CalendarContext from './../context/calendar-context';

const AddAppointment: React.FunctionComponent<any> = (props) => {
  const { setModalOptions } = useContext(CalendarContext);

  return (
    <div
      className="add-appointment"
      onClick={(e) => {
        setModalOptions({
          open: true,
          content: <AddAppointmentForm />,
        });
      }}
    >
      <div className="add-appointment-button">+</div>
    </div>
  );
};

export default AddAppointment;
