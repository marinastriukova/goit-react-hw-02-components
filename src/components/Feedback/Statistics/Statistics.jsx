import style from './Statistics.module.css';

function Statistics({good, neutral, bad, total, positivePercentage}){
    return(
        <ul>
            <li className={style.items}>Good: {good}</li>
            <li className={style.items}>Neutral: {neutral}</li>
            <li className={style.items}>Bad: {bad}</li>
            <li className={style.items}>Total: {total}</li>
            <li className={style.items}>Positive feedback: {positivePercentage}%</li>
        </ul>
    )
}

export default Statistics