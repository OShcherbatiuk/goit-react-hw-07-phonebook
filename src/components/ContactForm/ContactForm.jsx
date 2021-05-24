import { Component } from 'react';
import { PropTypes } from 'prop-types';
import shortid from 'shortid';
import { v4 as uuidv4 } from 'uuid';
import { connect } from 'react-redux';
import contactActions from '../../redux/phonebook/phonebook-actions';

import s from './ContactForm.module.css';

const INITIAL_STATE = {
  name: '',
  number: '',
};

class ContactForm extends Component {
  state = {
    ...INITIAL_STATE,
  };
  nameInputId = shortid.generate();
  numberInputId = shortid.generate();

  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({
      id: uuidv4(),
      [name]: value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    return (
      <div>
        <form className={s.form} onSubmit={this.handleSubmit}>
          <label className={s.label} htmlFor={this.nameInputId}>
            Name
            <input
              className={s.input}
              type="text"
              name="name"
              id={this.nameInputId}
              value={this.state.name}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
              onChange={this.handleChange}
            />
          </label>
          <label htmlFor={this.numberInputId}>
            Number
            <input
              className={s.input}
              type="tel"
              name="number"
              id={this.numberInputId}
              value={this.state.number}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
              required
              onChange={this.handleChange}
            />
          </label>
          <button className={s.btn} type="submit">
            Add contact
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onSubmit: data => dispatch(contactActions.addContact(data)),
});

ContactForm.propTypes = {
  onSubmit: PropTypes.func,
};
export default connect(null, mapDispatchToProps)(ContactForm);
