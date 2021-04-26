import React from 'react';
import DateActions from '../date-actions/date-actions';
import './day.css';

interface DayProps {
  date: Date;
  activeDay: boolean;
  selectDayHanlder: (date: Date) => void;
  isSelected: boolean;
}

const Day: React.FunctionComponent<DayProps> = (props) => {
  const { date, activeDay, selectDayHanlder, isSelected } = props;

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
    if (activeDay) {
      styleClasses.push('active');
    }
    return styleClasses.join(' ');
  };

  return (
    <div className={getStyleClasses()} onClick={() => dateSelection()}>
      <div className="day-label">
        <div className="day-number">{date.getDate()}</div>
        <div className="day-name">{getDayName()}</div>
      </div>
      {isSelected ? <DateActions /> : ''}
    </div>
  );
};

export default Day;
