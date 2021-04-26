import React from 'react';
import './calendar-selector.css';
import NavigationArrow from '../../svg-icons/navigation-arrow';

interface SelectorProps {
  selectedMonth: Date;
  navigateMonth: (target: 'next' | 'prev' | 'today') => void;
}

const CalendarSelector: React.FunctionComponent<SelectorProps> = (props) => {
  const { selectedMonth, navigateMonth } = props;

  const getMonthName = (date: Date) => {
    return date.toLocaleString('de-AT', { month: 'long' });
  };

  return (
    <React.Fragment>
      <div className="button" onClick={() => navigateMonth('today')}>
        Heute
      </div>
      <div
        className="button nav-arrow left"
        onClick={() => navigateMonth('prev')}
      >
        {NavigationArrow}
      </div>
      <div className="current-month">
        {getMonthName(selectedMonth)} {selectedMonth.getFullYear()}
      </div>
      <div
        className="button nav-arrow right"
        onClick={() => navigateMonth('next')}
      >
        {NavigationArrow}
      </div>
    </React.Fragment>
  );
};

export default CalendarSelector;
