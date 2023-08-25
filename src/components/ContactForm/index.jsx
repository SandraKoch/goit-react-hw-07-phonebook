import { useDispatch } from 'react-redux';
import css from './ContactForm.module.css';
import { addContact } from 'redux/contactsSlice';
import { nanoid } from '@reduxjs/toolkit';

export const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const contact = {
      id: nanoid(),
      name: e.currentTarget.elements.name.value,
      number: e.currentTarget.elements.number.value,
    };

    const form = e.target;
    dispatch(addContact(contact));
    form.reset();
  };

  return (
    <form className={css.formWrap} onSubmit={handleSubmit}>
      <label htmlFor="name" className={css.inputLabel}>
        Name
        <input
          type="text"
          id="name"
          placeholder="Type here..."
          title="Name may contain only letters, apostrophe, dash and spaces"
          required
          //   onChange={handleNameChange}
        />
      </label>
      <label htmlFor="number" className={css.inputLabel}>
        Phone number
        <input
          type="tel"
          id="number"
          placeholder="Type here..."
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          //   onChange={handlePhoneChange}
        />
      </label>
      <button type="submit" className={css.submitBtn}>
        Add contact
      </button>
    </form>
  );
};
