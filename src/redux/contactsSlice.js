import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initializeContactsFromLS(),
  reducers: {
    addContact(state, action) {
      const contacts = [...state, action.payload];
      localStorage.setItem('My-Contacts', JSON.stringify(contacts));
      return (state = contacts);
    },
    deleteContact(state, action) {
      const contacts = state.filter(contact => contact.id !== action.payload);
      localStorage.setItem('My-Contacts', JSON.stringify(contacts));
      return (state = contacts);
    },
  },
});

function initializeContactsFromLS() {
  const contactsFromLS = localStorage.getItem('My-Contacts');
  console.log('contactsFromLS', contactsFromLS);

  try {
    const parsedContacts = JSON.parse(contactsFromLS) || [];
    console.log('parsedContacts', parsedContacts);

    return parsedContacts;
  } catch (error) {
    console.log('error', error);
    return [];
  }
}

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
