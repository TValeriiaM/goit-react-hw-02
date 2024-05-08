import { useState, useEffect } from 'react'
import Description from '../Description/Description'
import Options from '../Options/Options';
import Feedback from '../Feedback/Feedback';
import Notification from '../Notification/Notification';

function App() {
const getFeedbacks = () => {
  const savedFeedbacks = localStorage.getItem("feedback-key");
  if (savedFeedbacks !== null) {
    return JSON.parse(savedFeedbacks)
  }
  return { good: 0, neutral: 0, bad: 0 }
  };

  const [feedbacks, setFeedback] = useState(getFeedbacks)

  useEffect(() => {
    localStorage.setItem("feedback-key", JSON.stringify(feedbacks))
  }, [feedbacks])

  const { good, neutral, bad } = feedbacks;

  const updateFeedback = feedbackType => {
    setFeedback({
      ...feedbacks,
      [feedbackType]: feedbacks [feedbackType] + 1,
    });
  };

const totalFeedbacks = good + neutral + bad;

const positiveFeedback = Math.round((good / totalFeedbacks) * 100);

const resetFeedback = () => {
    localStorage.removeItem("feedback-key");
  setFeedback({
    ...feedbacks,
    good: 0, neutral: 0, bad: 0
  });
  };

  return (
    <>
      <Description/>
      <Options
        updateFeedback={updateFeedback}
        totalFeedbacks={totalFeedbacks}
        resetFeedback={resetFeedback}
      />
      {totalFeedbacks !== 0 ? (
      <Feedback
        good={good}
        neutral={neutral}
        bad={bad}
        totalFeedbacks={totalFeedbacks}
        positiveFeedback={positiveFeedback}
      /> ) : (
      <Notification />
      )}
    </>
  )
}

export default App
