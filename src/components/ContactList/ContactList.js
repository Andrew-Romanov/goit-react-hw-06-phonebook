import PropTypes from 'prop-types';
import ContactListElement from './ContactListElement';
import styles from './ContactList.module.scss';

const ContactList = ({ contacts, filter, whenDelete }) => {
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase()),
  );

  return (
    <ul className={styles.ContactList}>
      {filteredContacts.map(({ id, name, number }) => (
        <li className={styles.ContactList__Item} key={id}>
          <ContactListElement
            name={name}
            number={number}
            whenDelete={() => whenDelete(id)}
          />
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
  filter: PropTypes.string.isRequired,
  whenDelete: PropTypes.func.isRequired,
};

export default ContactList;
