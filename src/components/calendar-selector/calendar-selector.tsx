import React, { useContext } from 'react';
import './calendar-selector.css';
import NavigationArrow from '../../svg-icons/navigation-arrow';
import moment from 'moment';
import { NAV_NEXT_MONTH, NAV_PREV_MONTH, NAV_TODAY } from '../../calendar';
import CalendarContext from '../../context/calendar-context';

const CalendarSelector: React.FunctionComponent = (props) => {
  const { selectedMonth, setSelectedMonth, setSelectedDay } =
    useContext(CalendarContext);

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
        setSelectedMonth(new Date());
        setSelectedDay(new Date());
        return;
      default:
        return;
    }

    setSelectedMonth(nextMonth);
  };

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
