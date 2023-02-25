import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm.jsx';
import { ContactList } from './ContactList/ContactList.jsx';
import { MainTitle, ContactTitle } from '../components/styles/GeneralStyles';
import { Filter } from './Filter/Filter.jsx';
import { save } from './Storage/Storage.js';

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

  addContact = (name, number) => {
    console.log(name, number);

    const contact = {
      id: nanoid(),
      name,
      number,
    };

    this.setState(prevState => {
      if (prevState.contacts.some(contact => contact.name === name)) {
        return alert(`${contact.name} is already in contacts`);
      }
      return {
        contacts: [contact, ...prevState.contacts],
      };
    });
  };

  // тут ми беремо вибраний id тудушки яку треба видалити і показуємо всі, в яких id не сходиться.
  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  getVisibleTodos = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  // при монтуванні
  componentDidMount() {
    //* показати все що є в localStorage зараз, буде JSON формат
    const contacts = localStorage.getItem('contacts');
    // console.log(contacts);
    //* json формат приводимо до вигляду об'єкту
    const parsedContacts = JSON.parse(contacts);
    // console.log(parsedContacts);
    //* перевірка, якщо якийся об'єкт є в localStorage => то записуємо в state, якщо ж немаж то не буде виконуватися if і не буде null
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }

    // load('contacts', this.state.contacts);
  }

  // якщо оновився state, поточний state не дорівнює попередньому стану => записуємо в localStarage
  componentDidUpdate(prevProps, prevState) {
    const { contacts } = this.state;
    if (contacts !== prevState.contacts) {
      // localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
      return save('contacts', contacts);
    }
  }

  render() {
    const { filter } = this.state;

    // const visibleTodos = this.state.contacts.filter(contact => contact.name.includes(this.state.filter);

    const visibleTodos = this.getVisibleTodos();

    return (
      <div>
        <MainTitle>Phonebook</MainTitle>
        <ContactForm onSubmit={this.addContact} />
        <ContactTitle>Contacts</ContactTitle>

        <Filter value={filter} onChange={this.changeFilter} />
        <ContactList contacts={visibleTodos} onSubmit={this.deleteContact} />
      </div>
    );
  }
}

// 21:47
