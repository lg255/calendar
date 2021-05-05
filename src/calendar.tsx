import React, { useState, useContext } from 'react';
import './calendar.css';
import CalendarSelector from './components/calendar-selector/calendar-selector';
import Day from './components/day/day';
import { auth, provider } from './Firebase';
import moment from 'moment';
import DateActionsModal from './components/date-actions/date-actions-modal/date-actions-modal';
import CalendarContext from './context/calendar-context';

export const NAV_NEXT_MONTH = 'next';
export const NAV_PREV_MONTH = 'prev';
export const NAV_TODAY = 'today';

function Calendar() {
  const [selectedMonth, setSelectedMonth] = useState(new Date());
  const [selectedDay, setSelectedDay] = useState<Date | null>();
  const { showModal } = useContext(CalendarContext);

  const currentDate = new Date();

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

  const navigateMonth = (nextOrPrev: string) => {
    const nextMonth = new Date(selectedMonth);

    switch (nextOrPrev) {
      case NAV_NEXT_MONTH:
        nextMonth.setMonth(selectedMonth.getMonth() + 1);
        break;
      case NAV_PREV_MONTH:
        nextMonth.setMonth(selectedMonth.getMonth() - 1);
        break;
      case NAV_TODAY:
        setSelectedMonth(currentDate);
        setSelectedDay(currentDate);
        return;
      default:
        return;
    }

    setSelectedMonth(nextMonth);
  };

  const isToday = (day: Date) => {
    return moment(currentDate).isSame(day, 'day');
  };

  const isDaySelected = (date: Date) => {
    return selectedDay != null && moment(selectedDay).isSame(date, 'day');
  };

  const selectDayHandler = (date: Date) => {
    setSelectedDay((prevDay) => {
      if (moment(prevDay).isSame(date, 'day')) {
        return null;
      }
      return date;
    });
  };

  const logIn = () => {
    auth
      .signInWithPopup(provider)
      .then((res) => console.log('login res', res))
      .catch((err) => console.log('login error', err));
  };

  return (
    <React.Fragment>
      <div className="button" onClick={() => logIn()}>
        Login
      </div>
      <h1>Kalender</h1>
      <div className="content-container">
        <div className="selector-container">
          <CalendarSelector
            selectedMonth={selectedMonth}
            navigateMonth={navigateMonth}
          />
        </div>
        <div className="calendar-container">
          {getDaysOfMonth(selectedMonth).map((date, index) => (
            <Day
              key={index}
              date={date}
              activeDay={isToday(date)}
              selectDayHanlder={selectDayHandler}
              isSelected={isDaySelected(date)}
            />
          ))}
        </div>
      </div>
      <DateActionsModal visible={showModal} selectedDay={selectedDay} />
    </React.Fragment>
  );
}

export default Calendar;
