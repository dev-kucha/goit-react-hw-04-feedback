import { Component } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  options = ['good', 'neutral', 'bad'];

  // const buttons = ['good', 'neutral', 'bad'];

  handleIncrement = name => {
    this.setState(prevState => {
      return { [name]: prevState[name] + 1 };
    });
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    return this.state.good / (this.countTotalFeedback() / 100) || 0;
  };

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          color: '#010101',
        }}
      >
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={this.options}
            onLeaveFeedback={this.handleIncrement}
          />
        </Section>
        <Section title={'Statistics'}>
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage().toFixed(
              2
            )}
          />
        </Section>
      </div>
    );
  }
}
