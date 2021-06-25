import React, { useState } from 'react';
import { Appointment } from '../components/appointment';
import { ModalOptions } from '../components/modal/modal-options';

export interface CalendarContextValue {
  selectedMonth: Date;
  setSelectedMonth: React.Dispatch<React.SetStateAction<Date>>;
  selectedDay: Date;
  setSelectedDay: React.Dispatch<React.SetStateAction<Date>>;
  appointments: Appointment[];
  setAppointments: React.Dispatch<React.SetStateAction<Appointment[]>>;
  modalOptions: ModalOptions;
  setModalOptions: React.Dispatch<React.SetStateAction<ModalOptions>>;
}

const CalendarContext = React.createContext<CalendarContextValue>(undefined!);

const CalendarProvider: React.FunctionComponent<any> = (props) => {
  const [selectedMonth, setSelectedMonth] = useState<Date>(new Date());
  const [selectedDay, setSelectedDay] = useState<Date>(new Date());
  const [appointments, setAppointments] = useState<Appointment[]>([]);

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
    modalOptions,
    setModalOptions,
  };

  return (
    <CalendarContext.Provider value={contextValue}>
      {props.children}
    </CalendarContext.Provider>
  );
};

export { CalendarProvider, CalendarContext };
