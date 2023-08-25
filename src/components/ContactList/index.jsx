import { ContactItem } from 'components/ContactItem';
import css from './ContactList.module.css';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filterQuery = useSelector(getFilter);
  return (
    <div>
      <ul className={css.contactList}>
        {contacts
          .filter(item =>
            item.name.toLowerCase().includes(filterQuery.toLowerCase())
          )
          .map(item => (
            <ContactItem key={item.id} item={item} />
          ))}
      </ul>
    </div>
  );
};
