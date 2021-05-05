import React from 'react';

export interface CalendarContextValue {
  showModal: boolean;
  setShowModal: Function;
}

const CalendarContext = React.createContext<CalendarContextValue>({
  showModal: false,
  setShowModal: () => {},
});

export default CalendarContext;
