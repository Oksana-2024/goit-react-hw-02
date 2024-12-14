import { useEffect, useState } from "react";
import "./App.module.css";
import Description from "./Descroption/Description";
import Feedback from "./Feedback/Feedback";
import Options from "./Options/Options";

function App() {
  const onReset = () => {
    setClick({ good: 0, neutral: 0, bad: 0 });
  };
  const [click, setClick] = useState(() => {
    const savedClick = window.localStorage.getItem("saved-click");

    if (savedClick !== null) {
      return JSON.parse(savedClick);
    }
    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

  const updateFeedback = (feedbackType) => {
    setClick({ ...click, [feedbackType]: click[feedbackType] + 1 });
  };

  const totalFeedback = click.good + click.neutral + click.bad;
  const positive = Math.round((click.good / totalFeedback) * 100);

  useEffect(() => {
    window.localStorage.setItem("saved-click", JSON.stringify(click));
  }, [click]);

  return (
    <>
      <Description />
      <Options
        onReset={onReset}
        onGood={() => updateFeedback("good")}
        onBad={() => updateFeedback("bad")}
        onNeutral={() => updateFeedback("neutral")}
        total={totalFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          good={click.good}
          bad={click.bad}
          neutral={click.neutral}
          total={totalFeedback}
          positive={positive}
        />
      ) : (
        <p>No feedback yet</p>
      )}
    </>
  );
}

export default App;
