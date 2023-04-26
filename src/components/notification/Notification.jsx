import React from 'react';
import css from './notification.module.css';

const Notification = ({ message }) => {
  return <h2 className={css.notification}>{message}</h2>;
};

export default Notification;
