import { connect } from 'react-redux';
import ContactListElement from './ContactListElement';
import { removeContact } from '../../redux/contacts/contacts-actions';
import styles from './ContactList.module.scss';

const ContactList = ({ contacts, filterValue, whenDelete }) => {
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterValue.toLowerCase()),
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

const mapStateToProps = state => ({
  filterValue: state.contacts.filter,
  contacts: state.contacts.items,
});

const mapDispatchToProps = dispatch => ({
  whenDelete: id => dispatch(removeContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
