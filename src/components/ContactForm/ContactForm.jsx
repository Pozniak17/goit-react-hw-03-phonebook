import { Component } from 'react';
import { Form, FormLabel, FormInput, FormButton } from './ContactForm';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  // ✅
  onChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    const { name, number } = this.state;
    event.preventDefault();
    console.log(this.state);

    // ! це наш addTodo(name, number)
    this.props.onSubmit(name, number);

    this.reset();
  };

  // ✅
  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormLabel>
          Name
          <FormInput
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.state.name}
            onChange={this.onChange}
          />
        </FormLabel>

        <FormLabel>
          Number
          <FormInput
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={this.state.number}
            onChange={this.onChange}
          />
        </FormLabel>

        <FormButton type="submit">Add contact</FormButton>
      </Form>
    );
  }
}
