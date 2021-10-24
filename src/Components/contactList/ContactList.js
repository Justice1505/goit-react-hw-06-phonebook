import React from 'react';

import { connect } from 'react-redux';
import { removeContact } from '../../Redux/phonebook/phonebook-actions';
import PropTypes from 'prop-types';
import s from './ContactList.module.css';

const ContactList = ({ filtered, removeContact, contactsList }) => {
  const onFindContact = (filtered, contactsList) => {
    return contactsList.filter(contact =>
      contact.name.toLowerCase().includes(filtered.toLowerCase()),
    );
  };
  const findContact = onFindContact(filtered, contactsList);

  return (
    <ul>
      {findContact &&
        findContact.map(contact => {
          return (
            <li className={s.item} key={contact.id}>
              <span className={s.span}>{contact.name}:</span>
              &nbsp;
              <span className={s.span}>{contact.number}</span>
              <button
                className={s.btn}
                type="button"
                id={contact.id}
                onClick={() => removeContact(contact.id)}
              >
                Delete
              </button>
            </li>
          );
        })}
    </ul>
  );
};

const mapStateToProps = state => ({
  filtered: state.contacts.filter,
  contactsList: state.contacts.items,
});

const mapDispatchToProps = {
  removeContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);

ContactList.propTypes = {
  filtered: PropTypes.string.isRequired,
  removeContact: PropTypes.func.isRequired,
  contactsList: PropTypes.array.isRequired,
};
