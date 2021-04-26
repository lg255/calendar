import React, { useState } from 'react';
import './calendar.css';
import CalendarSelector from './components/calendar-selector/calendar-selector';
import Day from './components/day/day';
import { auth, provider } from './Firebase';

function Calendar() {
  const [selectedMonth, setSelectedMonth] = useState(new Date());
  const [selectedDay, setSelectedDay] = useState<Date | null>();
  const currentDate = new Date();

  const getDaysOfMonth = (date: Date) => {
    const daysOfMonth = new Date(
      date.getFullYear(),
      date.getMonth() + 1,
      0
    ).getDate();

    const daysOfMonthAsArray: Date[] = [];

    for (let i = 1; i <= daysOfMonth; i++) {
      const day = new Date(date);
      day.setDate(i);
      daysOfMonthAsArray.push(day);
    }

    return daysOfMonthAsArray;
  };

  const navigateMonth = (nextOrPrev: 'next' | 'prev' | 'today') => {
    const nextMonth = new Date(selectedMonth);

    switch (nextOrPrev) {
      case 'next':
        nextMonth.setMonth(selectedMonth.getMonth() + 1);
        break;
      case 'prev':
        nextMonth.setMonth(selectedMonth.getMonth() - 1);
        break;
      case 'today':
        setSelectedMonth(currentDate);
        setSelectedDay(currentDate);
        return;
    }

    setSelectedMonth(nextMonth);
  };

  const isToday = (day: Date) => {
    return currentDate.toLocaleDateString() === day.toLocaleDateString();
  };

  const isDaySelected = (date: Date) => {
    return (
      selectedDay != null &&
      selectedDay.toLocaleDateString() === date.toLocaleDateString()
    );
  };

  const selectDayHandler = (date: Date) => {
    setSelectedDay((prevDay) => {
      if (prevDay?.toLocaleDateString() === date.toLocaleDateString()) {
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
    </React.Fragment>
  );
}

export default Calendar;
