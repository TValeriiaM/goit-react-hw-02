import css from "./Options.module.css"

export default function Options({ updateFeedback, totalFeedbacks, resetFeedback}) {
    return <ul className={css.optionlist}>
        <li>
            <button className={css.optionButton} onClick={() => {
            updateFeedback('good');
          }}>Good</button>
        </li>
        <li>
            <button className={css.optionButton} onClick={() => {
            updateFeedback('neutral');
          }}>Neutral</button>
        </li>
        <li>
            <button className={css.optionButton} onClick={() => {
            updateFeedback('bad');
          }}>Bad</button>
        </li>
        {totalFeedbacks !== 0 && (
        <li> 
                <button className={css.optionButton} onClick={ resetFeedback }>Reset</button>
        </li>
    )}
    </ul>
}