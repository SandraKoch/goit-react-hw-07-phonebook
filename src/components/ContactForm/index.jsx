import { useDispatch } from 'react-redux';
import css from './ContactForm.module.css';
import { nanoid } from '@reduxjs/toolkit';
import { addNewContact } from 'redux/operations';

export const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const contact = {
      id: nanoid(),
      name: e.currentTarget.elements.name.value,
      phone: e.currentTarget.elements.phone.value,
    };

    const form = e.target;
    dispatch(addNewContact(contact));
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
      <label htmlFor="phone" className={css.inputLabel}>
        Phone number
        <input
          type="tel"
          id="phone"
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
