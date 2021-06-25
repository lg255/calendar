import React, { useContext } from 'react';
import ViewAppointmentsButton from '../date-actions/view-appointments-button';
import moment from 'moment';
import { CalendarContext } from '../../context/calendar-provider';

interface DayProps {
  date: Date;
  isSelected: boolean;
}

const Day: React.FunctionComponent<DayProps> = (props) => {
  const { date, isSelected } = props;
  const { appointments, setSelectedDay } = useContext(CalendarContext);

  const isToday = () => {
    return moment(new Date()).isSame(date, 'day');
  };

  const getDayName = () => {
    return date.toLocaleString('de-AT', { weekday: 'long' });
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

  const selectDayHandler = () => {
    setSelectedDay((prevDay) => {
      if (moment(prevDay).isSame(date, 'day')) {
        return prevDay;
      }
      return date;
    });
  };

  return (
    <div className={getStyleClasses()} onClick={() => selectDayHandler()}>
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
      {isSelected ? (
        <ViewAppointmentsButton canOpenAppointmentsModal={isSelected} />
      ) : (
        ''
      )}
    </div>
  );
};

export default Day;
