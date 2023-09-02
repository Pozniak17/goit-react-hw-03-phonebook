import { ContactItem, Button } from './ContactList.styled';

export const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <ContactItem key={id}>
          <p>
            {name}: <span>{number}</span>
            <Button onClick={() => onDelete(id)}>Delete</Button>
          </p>
        </ContactItem>
      ))}
    </ul>
  );
};
