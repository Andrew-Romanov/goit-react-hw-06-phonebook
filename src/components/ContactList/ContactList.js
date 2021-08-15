import { useSelector, useDispatch } from 'react-redux';
import ContactListElement from './ContactListElement';
import { removeContact } from '../../redux/contacts/contacts-actions';
import styles from './ContactList.module.scss';

const ContactList = () => {
  const filteredContacts = useSelector(({ contacts: { items, filter } }) =>
    items.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    ),
  );
  const dispatch = useDispatch();

  return (
    <ul className={styles.ContactList}>
      {filteredContacts.map(({ id, name, number }) => (
        <li className={styles.ContactList__Item} key={id}>
          <ContactListElement
            name={name}
            number={number}
            whenDelete={() => dispatch(removeContact(id))}
          />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
