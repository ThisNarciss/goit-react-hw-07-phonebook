// import { nanoid } from 'nanoid';
import { createSlice } from '@reduxjs/toolkit';
import { successNotify } from 'utils/notification';
import { addContact, deleteContact, fetchContacts } from './operations';

const contactsInitialState = {
  items: [],
  isLoading: false,
  error: null,
  isDeleting: false,
};

function isRejected(str) {
  return action => action.type.endsWith(str);
}

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,

  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.items = payload;
      })
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.items.push(payload);
        successNotify(payload);
      })
      .addCase(deleteContact.fulfilled, (state, { payload: { id } }) => {
        state.items = state.items.filter(item => item.id !== id);
      })
      .addMatcher(isRejected('deleteContact/pending'), state => {
        state.isDeleting = true;
      })
      .addMatcher(isRejected('/fulfilled'), state => {
        state.isLoading = false;
        state.isDeleting = false;
        state.error = null;
      })
      .addMatcher(isRejected('/rejected'), (state, { payload }) => {
        state.isDeleting = false;
        state.isLoading = false;
        state.error = payload;
      })
      .addDefaultCase(state => {
        state.isLoading = true;
      });
  },
});

export const contactsReducer = contactsSlice.reducer;
