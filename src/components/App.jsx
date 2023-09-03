import { nanoid } from 'nanoid';
import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

import { GlobalStyle } from './GlobalStyle.styled';
import { Layout } from './Layout.styled';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const savedContacts = localStorage.getItem('contacts');
    const contacts = JSON.parse(savedContacts);
    if (contacts) {
      this.setState({ contacts });
    }
  }

  componentDidUpdate(_, prevState) {
    const { contacts } = this.state;
    if (contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }

  addContact = (name, number) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    this.setState(prevState => {
      if (
        prevState.contacts.some(
          contact =>
            contact.name.toLowerCase() === name.toLowerCase() ||
            contact.number === number
        )
      ) {
        return alert(`${name} or ${number} is already in contacts`);
      }
      return {
        contacts: [contact, ...prevState.contacts],
      };
    });
  };

  handleChangeFilter = event => {
    this.setState({ filter: event.target.value });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();
    return (
      <Layout>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />

        <h2>Contacts</h2>

        <Filter value={filter} onSubmit={this.handleChangeFilter} />
        <ContactList contacts={visibleContacts} onDelete={this.deleteContact} />
        <GlobalStyle />
      </Layout>
    );
  }
}
