// import ContactsItems from '../ContactsItems/ContactsItems';
import style from "./ContactsList.module.css"

function ContactsList({ contacts, onRemove }) {

    return (<ul className={style.list}>
        {contacts.map(contact => (
            <li className={style.item} key={contact.id}>
                <p>
                    <span>{contact.name}: </span>
                    <span>{contact.number}</span>
                </p>
                <button className={style.button} onClick={() => onRemove(contact.id)}>Delete</button>
            </li>)

            // <ContactsItems key={contact.id} name={contact.name} number={contact.number} 
            // ></ContactsItems>
        )}

    </ul>)
}

export default ContactsList;

