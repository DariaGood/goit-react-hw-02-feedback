import React from 'react';
import css from './feedbackOptions.module.css';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ onLeaveFeedback }) => (
  <div>
    <button
      className={`${css.feedbackButton} ${css.feedbackButtonText}`}
      onClick={() => onLeaveFeedback('good')}
    >
      Good
    </button>
    <button
      className={`${css.feedbackButton} ${css.feedbackButtonText}`}
      onClick={() => onLeaveFeedback('neutral')}
    >
      Neutral
    </button>
    <button
      className={`${css.feedbackButton} ${css.feedbackButtonText}`}
      onClick={() => onLeaveFeedback('bad')}
    >
      Bad
    </button>
  </div>
);

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired
}
export default FeedbackOptions;
