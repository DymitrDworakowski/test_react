import { Component } from "react";
import "./App.css";
import Section from "./components/Section";
import FeedbackOptions from "./components/FeedbackOptions";
import Statistics from "./components/Statistics";

class App extends Component {
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

  positiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;

    if (total === 0) {
      return 0; // Перевірка, щоб уникнути ділення на нуль
    }

    const positivePercentage = (good / total) * 100;
    return positivePercentage;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    if (total === 0) {
      return (
        <>
          <Section title="Please leave feedack" />
          <FeedbackOptions
            heandleOn={this.heandleOn}
            heandleNeu={this.heandleNeu}
            heandleBad={this.heandleBad}
          />
          <h2>There is no feedback</h2>
        </>
      );
    }

    return (
      <>
        <Section title="Please leave feedack" />
        <FeedbackOptions
          heandleOn={this.heandleOn}
          heandleNeu={this.heandleNeu}
          heandleBad={this.heandleBad}
        />
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={this.positiveFeedbackPercentage()}
        />
      </>
    );
  }
}

export default App;
