import React from 'react';
import './calendar-selector.css';
import NavigationArrow from '../../svg-icons/navigation-arrow';
import moment from 'moment';
import { NAV_NEXT_MONTH, NAV_PREV_MONTH, NAV_TODAY } from '../../calendar';

interface SelectorProps {
  selectedMonth: Date;
  navigateMonth: (target: string) => void;
}

const CalendarSelector: React.FunctionComponent<SelectorProps> = (props) => {
  const { selectedMonth, navigateMonth } = props;

  return (
    <React.Fragment>
      <div className="button" onClick={() => navigateMonth(NAV_TODAY)}>
        Heute
      </div>
      <div
        className="button nav-arrow left"
        onClick={() => navigateMonth(NAV_PREV_MONTH)}
      >
        {NavigationArrow}
      </div>
      <div className="current-month">
        {moment(selectedMonth).format('MMMM')} {selectedMonth.getFullYear()}
      </div>
      <div
        className="button nav-arrow right"
        onClick={() => navigateMonth(NAV_NEXT_MONTH)}
      >
        {NavigationArrow}
      </div>
    </React.Fragment>
  );
};

export default CalendarSelector;
