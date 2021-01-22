import style from './Buttons.module.css';

export default function FeedbackOptions({options, onButtonClick}){
    return(
        <>
        <button className={style.button} type={options} onClick={()=>{onButtonClick('good')}}>Good</button>
        <button className={style.button} type={options} onClick={()=>{onButtonClick('neutral')}}>Neutral</button>
        <button className={style.button} type={options} onClick={()=>{onButtonClick('bad')}}>Bad</button>
        </>
    )
}
