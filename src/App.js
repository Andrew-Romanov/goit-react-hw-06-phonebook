import MainContainer from './components/MainContainer';
import PageHeader from './components/PageHeader';
import Section from './components/Section';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';

const App = () => {
  return (
    <MainContainer>
      <PageHeader title="React Homework 06. Phonebook" />

      <Section title="Add Contact">
        <ContactForm />
      </Section>

      <Section title="Contacts">
        <Filter />
        <br />
        <ContactList />
      </Section>
    </MainContainer>
  );
};

export default App;
