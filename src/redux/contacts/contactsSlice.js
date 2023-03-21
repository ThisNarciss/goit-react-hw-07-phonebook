// import { nanoid } from 'nanoid';
import { createSlice } from '@reduxjs/toolkit';
import { successDelNotify, successNotify } from 'utils/notification';
import { addContact, deleteContact, fetchContacts } from './operations';

const contactsInitialState = {
  items: [],
  isLoading: false,
  error: null,
};

function isPromise(str) {
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
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        state.items = state.items.filter(item => item.id !== payload.id);
        successDelNotify(payload);
      })
      .addMatcher(isPromise('/fulfilled'), state => {
        state.isLoading = false;
        state.error = null;
      })
      .addMatcher(isPromise('/rejected'), (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addMatcher(isPromise('/pending'), state => {
        state.isLoading = true;
      })
      .addMatcher(isPromise('deleteContact/pending'), state => {
        state.isLoading = false;
      });
  },
});

export const contactsReducer = contactsSlice.reducer;
