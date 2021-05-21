import React from 'react';
import { Appointment } from '../components/appointment';
import { ModalOptions } from '../components/modal/modal-options';

export interface User {
  displayName?: string | null;
  photo?: string | null;
  userId?: string;
}

export interface CalendarContextValue {
  selectedMonth: Date;
  setSelectedMonth: React.Dispatch<React.SetStateAction<Date>>;
  selectedDay: Date;
  setSelectedDay: React.Dispatch<React.SetStateAction<Date>>;
  appointments: Appointment[];
  setAppointments: React.Dispatch<React.SetStateAction<Appointment[]>>;
  currentUser: User | null;
  setCurrentUser: React.Dispatch<React.SetStateAction<User | null>>;
  modalOptions: ModalOptions;
  setModalOptions: React.Dispatch<React.SetStateAction<ModalOptions>>;
}

const CalendarContext = React.createContext<CalendarContextValue>(undefined!);

export default CalendarContext;
