import { useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from './ContactForm.module.scss';
import store from '../../redux/store';
import { addContact } from '../../redux/contacts/contacts-actions';

const ContactForm = () => {
  const [contact, setContact] = useState({ name: '', number: '' });
  const dispatch = useDispatch();

  const handleChange = event => {
    const { name, value } = event.currentTarget;
    setContact(prevContact => ({ ...prevContact, [name]: value }));
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (
      store.getState().contacts.items.some(item => item.name === contact.name)
    )
      return alert(`${contact.name} is already in contacts`);

    dispatch(addContact(contact));

    formReset();
  };

  const formReset = () => {
    setContact({ name: '', number: '' });
  };

  return (
    <form className={styles.ContactForm} onSubmit={handleSubmit}>
      <label>
        {`Name: `}
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          value={contact.name}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        {`Number: `}
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          value={contact.number}
          onChange={handleChange}
        />
      </label>
      <br />
      <button className={styles.ContactForm__Button} type="submit">
        Add Contact
      </button>
    </form>
  );
};

export default ContactForm;
