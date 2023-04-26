import React, { Component } from 'react';
import Container from './container/Container';
import Section from './section/Section';
import Statistics from './statistics/Statistics';
import FeedbackOptions from './feedbackOptions/FeedbackOptions';

export class App extends Component {
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
    return this.state.good + this.state.neutral + this.state.bad;
  }

  countPositiveFeedbackPercentage() {
    return ((this.state.good / this.countTotalFeedback()) * 100).toFixed(0);
  }

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Container>
          <Section title="Please leave feedback">
            <FeedbackOptions onLeaveFeedback={this.handleClick} />
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          </Section>
        </Container>
      </div>
    );
  }
}
