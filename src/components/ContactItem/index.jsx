import { useDispatch } from 'react-redux';
import css from './ContactItem.module.css';
import { deleteContact } from 'redux/operations';

export const ContactItem = ({ item }) => {
  const dispatch = useDispatch();

  const deleteItem = id => {
    dispatch(deleteContact(id));
  };

  return (
    <li className={css.contactItem}>
      {item.name}: {item.phone}
      <button
        className={css.deleteBtn}
        type="button"
        onClick={() => deleteItem(item.id)}
      >
        Usuń
      </button>
    </li>
  );
};
