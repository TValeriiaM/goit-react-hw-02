import css from "./Feedback.module.css"

export default function Feedback({ good, neutral, bad, totalFeedbacks, positiveFeedback }) {
    return <ul className={css.feedbacklist}> 
    <li className={css.feedbackItem}>Good: {good}</li>
    <li className={css.feedbackItem}>Neutral: {neutral} </li>
    <li className={css.feedbackItem}>Bad: {bad}</li>
    <li className={css.feedbackItem}>Total: {totalFeedbacks}</li>
    <li className={css.feedbackItem}>Positive: {positiveFeedback}%</li>
</ul>
}