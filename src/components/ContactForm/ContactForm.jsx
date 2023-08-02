import { useState } from 'react';
import PropTypes from 'prop-types';

function ContactForm({ onAddContact }) {
  const [newUser, setnewUser] = useState({ name: '', number: '' });

  const onInputChange = e => {
    setnewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const onFormSubmit = e => {
    e.preventDefault();

    onAddContact(newUser);

    e.target.reset();
  };

  return (
    <>
      <form onSubmit={onFormSubmit} className="form-signin">
        <label>
          Name:
          <input
            onChange={onInputChange}
            type="text"
            name="name"
            maxLength="24"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. 
              For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan.
              Maximum length of name is 24 characters"
            required
          />
        </label>
        <label>
          Phone number:
          <input
            onChange={onInputChange}
            type="tel"
            name="number"
            maxLength="12"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    </>
  );
}

export default ContactForm;

ContactForm.propTypes = {
  onAddContact: PropTypes.func.isRequired,
};
