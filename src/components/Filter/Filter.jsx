import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import contactActions from '../../redux/phonebook/phonebook-actions';
import shortid from 'shortid';
import s from './Filter.module.css';

const inputId = shortid.generate();

const Filter = ({ contacts, value, onChange }) => {
  const isShowContact = contacts.length;
  return isShowContact ? (
    <label className={s.label} htmlFor={inputId}>
      Find contacts by name
      <input
        className={s.input}
        id={inputId}
        type="text"
        value={value}
        onChange={onChange}
      />
    </label>
  ) : (
    <p>You haven't any contacts</p>
  );
};

const mapStateToProps = state => ({
  value: state.phonebook.filter,
  contacts: state.phonebook.contacts,
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(contactActions.changeFilter(e.target.value)),
});

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
