import { useState, useEffect, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import MainContainer from './components/MainContainer';
import PageHeader from './components/PageHeader';
import Section from './components/Section';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
// import initialContacts from './utils/contacts.json';
import Filter from './components/Filter';

const App = () => {
  const [contacts, setContacts] = useState([]);
  // const [contacts, setContacts] = useState(initialContacts);
  const [filter, setFilter] = useState('');
  const isFirstRender = useRef(true);

  useEffect(() => {
    const contactsData = JSON.parse(localStorage.getItem('contacts'));
    if (contactsData) setContacts(contactsData);
  }, []);

  useEffect(() => {
    if (isFirstRender.current === true) {
      isFirstRender.current = false;
      return;
    }
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleFilter = event => {
    setFilter(event.target.value);
  };

  const whenSubmit = ({ name, number }) => {
    if (contacts.some(contact => contact.name === name))
      return alert(`${name} is already in contacts`);

    setContacts(prevContacts => [
      ...prevContacts,
      { id: uuidv4(), name, number },
    ]);
  };

  const whenDelete = idToDelete => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== idToDelete),
    );
  };

  return (
    <MainContainer>
      <PageHeader title="React Homework 04. Phonebook" />

      <Section title="Add Contact">
        <ContactForm whenSubmit={whenSubmit} />
      </Section>

      <Section title="Contacts">
        <Filter filterValue={filter} whenChange={handleFilter} />
        <br />
        <ContactList
          contacts={contacts}
          filter={filter}
          whenDelete={whenDelete}
        />
      </Section>
    </MainContainer>
  );
};

export default App;
