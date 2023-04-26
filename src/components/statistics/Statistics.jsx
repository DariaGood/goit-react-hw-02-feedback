import React from 'react';
import Notification from '../notification/Notification';

function Statistics(props) {
  const { good, neutral, bad, total, positivePercentage } = props;
  // let feedbackStatus;
  // if  (good ===0){
  //   feedbackStatus = <Notification message="There is no feedback"/>
  // } else {
  //   feedbackStatus =
  // }
  return (
    <div>
      {' '}
      <h2>Statistics</h2>
      {total === 0 ? (
        <Notification message="There is no feedback" />
      ) : (
        <div>
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
          <p>Total: {total !== undefined ? total : 0}</p>
          <p>
            Positive feedback:{' '}
            {positivePercentage !== undefined
              ? positivePercentage > 0
                ? `${positivePercentage}%`
                : '0%'
              : '0%'}
          </p>
        </div>
      )}
    </div>
  );
}

export default Statistics;
