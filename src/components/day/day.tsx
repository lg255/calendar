import React, { useContext } from 'react';
import CalendarContext from '../../context/calendar-context';
import DateActions from '../date-actions/date-actions';
import moment from 'moment';
import './day.css';

interface DayProps {
  date: Date;
  selectDayHanlder: (date: Date) => void;
  isSelected: boolean;
}

const Day: React.FunctionComponent<DayProps> = (props) => {
  const { date, selectDayHanlder, isSelected } = props;
  const { appointments } = useContext(CalendarContext);

  const isToday = () => {
    return moment(new Date()).isSame(date, 'day');
  };

  const getDayName = () => {
    return date.toLocaleString('de-AT', { weekday: 'long' });
  };

  const dateSelection = () => {
    selectDayHanlder(date);
  };

  const getStyleClasses = () => {
    const styleClasses = ['day'];
    if (isSelected) {
      styleClasses.push('selected');
    }
    if (isToday()) {
      styleClasses.push('active');
    }
    return styleClasses.join(' ');
  };

  return (
    <div className={getStyleClasses()} onClick={() => dateSelection()}>
      <div className="appointments">
        {appointments.map((appointment, index) => {
          if (moment(appointment.date).isSame(date, 'day')) {
            return <div key={appointment.id} className="appointment"></div>;
          }
          return <span key={index}></span>;
        })}
      </div>
      <div className="day-label">
        <div className="day-number">{date.getDate()}</div>
        <div className="day-name">{getDayName()}</div>
      </div>
      {isSelected ? <DateActions /> : ''}
    </div>
  );
};

export default Day;
