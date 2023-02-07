import React from 'react';
import styles from './Date.module.scss';

const { wrapperDate, time, date } = styles;

const Date = () => {
  const months = [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec', ];

  const days = [ 'Sanday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', ];

  const getTime = (t = new Date()) => {
    let hours = t.getHours();
    let minuts = t.getMinuts();

    return `${hours}:${minuts}`
  };


  return (
    <div className={wrapperDate}>
      <p className={time}>12:38</p>
      <p className={date}>saturday, jun 20</p>
    </div>
  );
}

export default Date;
