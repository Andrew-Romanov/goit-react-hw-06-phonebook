import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './ContactForm.module.scss';

const ContactForm = ({ whenSubmit }) => {
  const [contact, setContact] = useState({ name: '', number: '' });

  const handleChange = event => {
    const { name, value } = event.currentTarget;
    setContact(prevContact => ({ ...prevContact, [name]: value }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    whenSubmit(contact);
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

ContactForm.propTypes = {
  whenSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
