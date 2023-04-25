import React, { Component } from 'react';

class FeedbackCounter extends Component {
  //  state propTypes = {};

  constructor(props) {
    super(props);
    this.state = {
      good: 0,
      neutral: 0,
      bad: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(state) {
    this.setState(
      prevState => ({
        [state]: prevState[state] + 1,
      }),
      () => {
        this.countTotalFeedback();
        this.countPositiveFeedbackPercentage();
      }
    );
  }
  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    let total = good + neutral + bad;
   this.setState({ total: total });
  }

  countPositiveFeedbackPercentage() {
    const { good, total } = this.state;
    let percentage = ((good / total) * 100).toFixed(0);
    this.setState({ percentage: percentage });
  }

  render() {
    return (
      <div>
        <h1>Please leave feedback</h1>
        <button onClick={() => this.handleClick('good')}>Good</button>
        <button onClick={() => this.handleClick('neutral')}>Neutral</button>
        <button onClick={() => this.handleClick('bad')}>Bad</button>
        <h2>Statistics</h2>
        <p>Good: {this.state.good}</p>
        <p>Neutral: {this.state.neutral}</p>
        <p>Bad: {this.state.bad}</p>
        <p>Total: {this.state.total !== undefined ? this.state.total : 0}</p>
        <p>Positive feedback: {this.state.percentage !== undefined ? (this.state.percentage > 0 ? `${this.state.percentage}%` : '0%') : '0%'}</p>
      </div>
    );
  }
}

export default FeedbackCounter;
