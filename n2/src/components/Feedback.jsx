import React, { Component } from "react";

class Feedback extends Component {
  constructor(props) {
    super(props);
    this.state = {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  }
  heandleOn = () => {
    for (let i = 0; i < 1; i += 1) {
      this.setState((prevState) => {
        return { good: prevState.good + 1 };
      });
    }
  };
  heandleNeu = () => {
    for (let i = 0; i < 1; i += 1) {
      this.setState((prevState) => {
        return { neutral: prevState.neutral + 1 };
      });
    }
  };
  heandleBad = () => {
    for (let i = 0; i < 1; i += 1) {
      this.setState({ bad: this.state.bad + 1 });
    }
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
      const { good, neutral, bad } = this.state;
      const total = good + neutral + bad;

      if (total === 0) {
        return 0; // Перевірка, щоб уникнути ділення на нуль
      }

      const positivePercentage = (good / total) * 100;
      return positivePercentage;
  }

  render() {
    console.log(this.countTotalFeedback());
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    return (
      <div>
        <h1>Please leave feedack</h1>
        <button type="button" onClick={this.heandleOn}>
          Good
        </button>
        <button type="button" onClick={this.heandleNeu}>
          Neutral
        </button>
        
        <button type="button" onClick={this.heandleBad}>
          Bad
        </button>
        <h1>Statistics</h1>
        <p>Good:{good}</p>
        <p>Neutral:{neutral}</p>
        <p>Bad:{bad}</p>
        <p>Total:{total}</p>
        <p>Positive feedack:{this.countPositiveFeedbackPercentage()}%</p>
      </div>
    );
  }
}

export default Feedback;
