import { Component } from 'react';
import style from './Form.module.css';
import { v4 as uuidv4 } from 'uuid';


export default class Form extends Component {

    state = {
        contacts: [],
        name: '',
        number: ''
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = e => {
        e.preventDefault();

        const contact = [
            { name: this.state.name, number: this.state.number, id: uuidv4() }
        ]

        if (this.state.contacts.find(({ name }) => name.toLowerCase() === this.state.name.toLowerCase())) {
            alert('This contact is already in phonebook');
            return
        } else {
            this.setState({ contacts: [...this.state.contacts, ...contact] })   
        }

        this.props.onAddContact(contact);

        this.reset()
    }

    reset = () => {
        this.setState({ name: '', number: '' });
    };

    render() {
        const { name, number } = this.state;

        return (
            <form className={style.form} onSubmit={this.handleSubmit}>
                <label className={style.formLabel}>
                    Name
                    <input
                        name='name'
                        type="text"
                        className={style.formInput}
                        value={name}
                        onChange={this.handleChange}
                        required
                    />
                </label>
                <label className={style.formLabel}>
                    Number
                    <input
                        name='number'
                        type="text"
                        className={style.formInput}
                        value={number}
                        onChange={this.handleChange}
                        required
                    />
                </label>
                <button type="submit" className={style.formButton}>Add contact</button>
            </form>
        )
    }
}