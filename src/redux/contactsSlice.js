import { createSlice } from '@reduxjs/toolkit';

const contactsInitialState = {
  items: [],
  isLoading: false,
  error: null,
};
const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    fetchingInProgress(state) {
      state.isLoading = true;
    },
    fetchingSuccess(state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    fetchingError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    addingInProgress(state) {
      state.isLoading = true;
    },
    addingSuccess(state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = [...state.items, action.payload];
    },
    addingError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    deletingInProgress(state) {
      state.isLoading = true;
    },
    deletingSuccess(state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = state.items.filter(
        contact => contact.id !== action.payload
      );
    },
    deletingError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchingInProgress,
  fetchingSuccess,
  fetchingError,
  addingInProgress,
  addingSuccess,
  addingError,
  deletingInProgress,
  deletingSuccess,
  deletingError,
} = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
