import style from './Filter.module.css'

function Filter({value, onChangeFilter}) {
    return(
        <label className={style.label}>
            Find contacts by name
            <input 
            type="text"
            value={value}
            onChange={e => onChangeFilter(e.target.value)}
            className={style.input}
            />
        </label>
    )
}

export default Filter