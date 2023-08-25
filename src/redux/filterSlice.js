import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = initializeFilterFromLS();

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    filterContacts(state, action) {
      const myFilter = action.payload;
      localStorage.setItem('My-Filter', JSON.stringify(myFilter));
      return (state = myFilter);
    },
  },
});

function initializeFilterFromLS() {
  const filterFromLS = localStorage.getItem('My-Filter');

  try {
    const parsedFilter = JSON.parse(filterFromLS) || '';
    return parsedFilter;
  } catch (error) {
    console.log('error', error);
    return '';
  }
}

export const { filterContacts } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
