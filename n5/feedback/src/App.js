import { useState } from "react";
import "./App.css";
import Section from "./components/Section";
import FeedbackOptions from "./components/FeedbackOptions";
import Statistics from "./components/Statistics";

const App =()=> {
  
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);


  const heandleOn = () => {
    setGood(good + 1);
  };
  const heandleNeu = () => {
    setNeutral(neutral + 1);
  };
  const heandleBad = () => {
    setBad(bad + 1);
  };

  const countTotalFeedback = () => {
    const total = good + neutral + bad;
    return total;
  };

  const positiveFeedbackPercentage = () => {
    const total = good + neutral + bad;

    if (total === 0) {
      return 0; // Перевірка, щоб уникнути ділення на нуль
    }

    const positivePercentage = (good / total) * 100;
    return positivePercentage;
  };

 
    
 const total = countTotalFeedback();
if (total === 0) {
  return (
    <>
      <Section title="Please leave feedback" />
      <FeedbackOptions
        heandleOn={heandleOn}
        heandleNeu={heandleNeu}
        heandleBad={heandleBad}
      />
      <h2>There is no feedback</h2>
    </>
  );
} else {
  return (
    <>
      <Section title="Please leave feedback" />
      <FeedbackOptions
        heandleOn={heandleOn}
        heandleNeu={heandleNeu}
        heandleBad={heandleBad}
      />
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
        positivePercentage={positiveFeedbackPercentage()}
      />
    </>
  );
}
  }


export default App;
