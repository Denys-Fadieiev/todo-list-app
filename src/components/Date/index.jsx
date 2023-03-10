import React from 'react';
import styles from './Date.module.scss';

const { wrapperDate, time, date } = styles;
const months = [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec', ];

const days = [ 'Sanday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', ];

function addLeadingZero(d) {return (d < 10) ? '0' + d : d
};

const DateTodoList = () => {
  const t = new Date();
  let currentTime = addLeadingZero(t.getHours())+':'+addLeadingZero(t.getMinutes());
  let day = days[t.getDay()];
  let month = months[t.getMonth()];
  let currentDate = day+', '+month+' '+t.getDate();
  return (
    <div className={wrapperDate}>
      <p className={time}>{currentTime}</p>
      <p className={date}>{currentDate}</p>
    </div>
  );
}

export default DateTodoList;
