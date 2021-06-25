import React from 'react';
import ReactDOM from 'react-dom';
import Calendar from './calendar';
import { CalendarProvider } from './context/calendar-provider';
import moment from 'moment';
import Modal from './components/modal/modal';
import { UserProvider } from './context/user-provider';

moment.locale('de-AT', {
  weekdays: [
    'Sonntag',
    'Montag',
    'Dienstag',
    'Mittwoch',
    'Donnerstag',
    'Freitag',
    'Samstag',
  ],
  months: [
    'Jänner',
    'Februar',
    'März',
    'April',
    'Mai',
    'Juni',
    'Juli',
    'August',
    'September',
    'Oktober',
    'November',
    'Dezember',
  ],
});

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <CalendarProvider>
        <Calendar />
        <Modal />
      </CalendarProvider>
    </UserProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
