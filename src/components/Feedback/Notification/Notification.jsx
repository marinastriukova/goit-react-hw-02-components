import PropTypes from 'prop-types';
import style from './Notification.module.css';


function Notification({message}) {
    return <p className={style.text}>{message}</p>
}

Notification.propTypes ={
    message: PropTypes.string
}


export default Notification