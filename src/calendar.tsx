import React, { useContext } from 'react';
import './calendar.css';
import CalendarSelector from './components/calendar-selector/calendar-selector';
import Day from './components/day/day';
import moment from 'moment';
import CalendarContext from './context/calendar-context';
import Header from './components/header/header';
import AddAppointment from './components/add-appointment/add-appointment';

export const NAV_NEXT_MONTH = 'next';
export const NAV_PREV_MONTH = 'prev';
export const NAV_TODAY = 'today';

function Calendar() {
  const { selectedDay, selectedMonth } = useContext(CalendarContext);

  const getDaysOfMonth = (date: Date) => {
    const lastDayOfMonth = new Date(
      date.getFullYear(),
      date.getMonth() + 1,
      0
    ).getDate();

    const daysOfMonth: Date[] = [];

    for (let i = 1; i <= lastDayOfMonth; i++) {
      const day = new Date(date);
      day.setDate(i);
      daysOfMonth.push(day);
    }

    return daysOfMonth;
  };

  const isDaySelected = (date: Date) => {
    return selectedDay != null && moment(selectedDay).isSame(date, 'day');
  };

  return (
    <React.Fragment>
      <Header />
      <h1>Kalender</h1>
      <div className="content-container">
        <div className="selector-container">
          <CalendarSelector />
        </div>
        <div className="calendar-container">
          {getDaysOfMonth(selectedMonth).map((date, index) => (
            <Day key={index} date={date} isSelected={isDaySelected(date)} />
          ))}
        </div>
      </div>
      <AddAppointment />
    </React.Fragment>
  );
}

export default Calendar;
