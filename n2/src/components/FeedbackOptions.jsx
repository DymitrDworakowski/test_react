const FeedbackOptions = ({ heandleOn, heandleNeu, heandleBad }) => {
  return (
    <div>
      <button type="button" onClick={heandleOn}>
        Good
      </button>
      <button type="button" onClick={heandleNeu}>
        Neutral
      </button>
      <button type="button" onClick={heandleBad}>
        Bad
      </button>
    </div>
  );
};

export default FeedbackOptions;
