import style from './Section.module.css'
import PropTypes from 'prop-types';

function Section({ title, children }) {
    return <div className={style.section}>
        <h1 className={style.title}>{title}</h1>
        {children}
        </div>
}

Section.propTypes = {
    title: PropTypes.string
}

export default Section;