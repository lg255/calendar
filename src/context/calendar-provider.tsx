import React, { useState } from 'react';
import { Appointment } from '../components/appointment';
import CalendarContext, { User } from './calendar-context';

const CalendarProvider: React.FunctionComponent<any> = (props) => {
  const [selectedMonth, setSelectedMonth] = useState<Date>(new Date());
  const [selectedDay, setSelectedDay] = useState<Date>(new Date());
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  const contextValue = {
    selectedMonth,
    setSelectedMonth,
    selectedDay,
    setSelectedDay,
    appointments,
    setAppointments,
    currentUser,
    setCurrentUser,
  };

  return (
    <CalendarContext.Provider value={contextValue}>
      {props.children}
    </CalendarContext.Provider>
  );
};

export default CalendarProvider;
