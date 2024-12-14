import { useState } from "react";
import "./App.module.css";
import Description from "./Descroption/Description";
import Feedback from "./Feedback/Feedback";
import Options from "./Options/Options";

function App() {
  const onReset = () => {
    setClick({ good: 0, neutral: 0, bad: 0 });
  };
  const [click, setClick] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  const updateFeedback = (feedbackType) => {
    setClick({ ...click, [feedbackType]: click[feedbackType] + 1});
  };

  return (
    <>
      <Description />
      <Options onReset={onReset} onGood={() => updateFeedback("good")} onBad={() => updateFeedback("bad")} onNeutral={() => updateFeedback("neutral")}/>
      <Feedback good={click.good} bad={click.bad} neutral={click.neutral} />
    </>
  );
}

export default App;
