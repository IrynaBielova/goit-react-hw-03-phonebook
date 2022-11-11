import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Form } from './Form'
import { Filter } from './Filter';
import { ContactsList } from "./ContactsList";
import styles from '../styles/styles.module.css';

export class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
    name: '',
    number: ''
  }    

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    if (contacts !== null) {
      this.setState({ contacts: JSON.parse(contacts) });
    }
  }
  componentDidUpdate(_, prevState) {
    const { contacts } = this.state;
    if (prevState.contacts !== contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }

  addContact = ({name, number}) => {
    const { contacts } = this.state;
    const newName = {
      id: nanoid(),
      name,
      number,
    }

    if (
      contacts.every(
        ({ name }) => name.toLowerCase() !== newName.name.toLowerCase()
      )
    ) {
      this.setState((prevState) => ({
        contacts: [newName, ...prevState.contacts],
      }));
    } else {
      alert(`${newName.name} is already in contacts`);
    }
  };

  changeFilter = e => {
    this.setState({filter: e.currentTarget.value});
  }

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId)
    }))

  }

  render() {
    const {filter, contacts} = this.state;

    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    )

    return (
      <>
        <div>
          
          <h2>Phonebook</h2>
          
          <Form onSubmit={this.addContact}/>
          
          <h3>Contacts</h3>

          <Filter 
            value={filter}
            onChange={this.changeFilter}
          />

          <ContactsList 
            contacts={filteredContacts}
            onDeleteContact={this.deleteContact}
          />

        </div>
      </>
    )
  }
};

export default styles;