import React, { useState } from 'react';
import { Appointment } from '../components/appointment';
import { ModalOptions } from '../components/modal/modal-options';
import CalendarContext, { User } from './calendar-context';

const CalendarProvider: React.FunctionComponent<any> = (props) => {
  const [selectedMonth, setSelectedMonth] = useState<Date>(new Date());
  const [selectedDay, setSelectedDay] = useState<Date>(new Date());
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [modalOptions, setModalOptions] = useState<ModalOptions>({
    open: false,
  });

  const contextValue = {
    selectedMonth,
    setSelectedMonth,
    selectedDay,
    setSelectedDay,
    appointments,
    setAppointments,
    currentUser,
    setCurrentUser,
    modalOptions,
    setModalOptions,
  };

  return (
    <CalendarContext.Provider value={contextValue}>
      {props.children}
    </CalendarContext.Provider>
  );
};

export default CalendarProvider;
