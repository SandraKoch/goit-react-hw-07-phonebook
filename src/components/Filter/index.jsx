import { useDispatch, useSelector } from 'react-redux';
import css from './Filter.module.css';
import { filterContacts } from 'redux/filterSlice';
import { getFilter } from 'redux/selectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const filterQuery = useSelector(getFilter);

  const handleFilterChange = e => {
    const query = e.target.value;
    dispatch(filterContacts(query));
  };

  return (
    <input
      className={css.input}
      type="text"
      defaultValue={filterQuery}
      onChange={handleFilterChange}
      placeholder="Search contacts by name..."
    />
  );
};
