import React from 'react';
import { Appointment } from './../appointment';

export interface User {
  displayName?: string | null;
  userId?: string;
}

export interface CalendarContextValue {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  selectedMonth: Date;
  setSelectedMonth: React.Dispatch<React.SetStateAction<Date>>;
  selectedDay: Date;
  setSelectedDay: React.Dispatch<React.SetStateAction<Date>>;
  appointments: Appointment[];
  setAppointments: React.Dispatch<React.SetStateAction<Appointment[]>>;
  currentUser: User | null;
  setCurrentUser: React.Dispatch<React.SetStateAction<User | null>>;
}

const CalendarContext = React.createContext<CalendarContextValue>(undefined!);

export default CalendarContext;
