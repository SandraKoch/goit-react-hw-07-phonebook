import { ContactForm } from './ContactForm';
import { Filter } from './Filter';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { getContacts } from 'redux/selectors';
import { ContactList } from './ContactList';

export const App = () => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector(getContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        color: '#010101',
      }}
    >
      {isLoading && <b style={{ color: 'white' }}>Loading contacts...</b>}

      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};
