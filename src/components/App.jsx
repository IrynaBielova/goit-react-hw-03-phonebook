import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Form } from './Form'
import { Filter } from './Filter';
import { ContactsList } from "./ContactsList";

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
    const contact = {
      id: nanoid(),
      name,
      number,
    }

    if(this.state.contacts.find( contact => contact.name === name)) {
      return alert(`${name} is already in contacts`)
    }

    this.setState(({contacts}) => ({
      contacts: [contact, ...contacts]
    }))
  }

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
        <div
 style={{
      width: "320px",
      margin: "7px",
      marginRight: "auto",
      marginLeft: "auto",
      textAlign: "center",
      paddingTop: "6px",
      paddingBottom: "6px",
      borderRadius: "4px",
      boxShadow: "0px 0px 5px 2px rgba(174,183,227,1)",
  }}>
          
          <h2
          style={{
            marginBottom: "18px",
            color: "rgba(174,183,227,1)"
          }}>Phonebook</h2>
          
          <Form onSubmit={this.addContact}/>
          
          <h3
          style={{
            marginBottom: "16px",
            color: "rgba(174,183,227,1)"
          }}
          >Contacts</h3>

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