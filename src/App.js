import { Component } from 'react';
import { connect } from 'react-redux';
import Container from './components/Container';
import Section from './components/Section';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';
import contactOperations from '../src/redux/phonebook/phonebook-operations';

class App extends Component {
  componentDidMount() {
    this.props.fetchContact();
  }

  render() {
    return (
      <Container>
        <Section title={'Phonebook'}>
          <ContactForm />
        </Section>
        <Section title={'Contacts'}>
          <Filter />
          <ContactList />
        </Section>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchContact: () => dispatch(contactOperations.fetchContact()),
});

export default connect(null, mapDispatchToProps)(App);
