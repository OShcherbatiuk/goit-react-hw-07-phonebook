import { connect } from 'react-redux';
import contactActions from '../../redux/phonebook/phonebook-actions';
import { PropTypes } from 'prop-types';

import s from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={s.list}>
      {contacts.map(({ id, name, number }) => (
        <li className={s.item} key={id}>
          {name}: {number}
          <button
            className={s.btn}
            type="button"
            onClick={() => onDeleteContact(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

const getVisibleContact = (filter, contacts) => {
  const normalizedFilter = filter.toLowerCase();
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter),
  );
};

const mapStateToProps = ({ phonebook: { filter, contacts } }) => ({
  contacts: getVisibleContact(filter, contacts),
});

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(contactActions.deleteContact(id)),
});

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape),
  onDeleteContact: PropTypes.func,
};
export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
