import React from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';

import { removeSpace } from '../functions';

let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k])

let CalendarView = props => {

  const { gatherings } = props;

  return (
    <div>
      <BigCalendar
        eventPropGetter={event => ({className: 'category-' + removeSpace(event.room)})}
        onSelectEvent={props.onSelect}
        events={gatherings}
        defaultView="month"
        timeslots={4}
        views={['month', 'week']}
        popupOffset={{x: 0, y: 200}}
      />
    </div>
  )
}

export default CalendarView;
