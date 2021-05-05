import React, { useState } from 'react';
import CalendarContext from './calendar-context';

const CalendarProvider: React.FunctionComponent<any> = (props) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <CalendarContext.Provider value={{ showModal, setShowModal }}>
      {props.children}
    </CalendarContext.Provider>
  );
};

export default CalendarProvider;
