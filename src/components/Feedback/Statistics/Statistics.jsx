import style from './Statistics.module.css';
import PropTypes from 'prop-types';

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


Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
  }; 

export default Statistics