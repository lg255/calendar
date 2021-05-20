import React, { useContext } from 'react';
import CalendarContext from '../../context/calendar-context';
import ViewAppointmentsButton from '../date-actions/view-appointments-button';
import moment from 'moment';

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
      styleClasses.push('today');
    }
    return styleClasses.join(' ');
  };

  return (
    <div className={getStyleClasses()} onClick={() => dateSelection()}>
      <div className="appointments">
        {appointments.map((appointment, index) => {
          if (moment(appointment.date).isSame(date, 'day')) {
            return (
              <div
                key={index}
                className={'appointment ' + appointment.type}
              ></div>
            );
          }
          return <span key={index}></span>;
        })}
      </div>
      <div className="day-label">
        <div className="day-number">{date.getDate()}</div>
        <div className="day-name">{getDayName()}</div>
      </div>
      {isSelected ? <ViewAppointmentsButton /> : ''}
    </div>
  );
};

export default Day;
