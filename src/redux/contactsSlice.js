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

function handlePending(state) {
  state.isLoading = true;
}

function handleRejected(state, payload) {
  state.isLoading = false;
  state.error = payload;
}

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,

  extraReducers: {
    [fetchContacts.pending](state) {
      handlePending(state);
    },
    [fetchContacts.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.error = null;
      state.items = payload;
    },
    [fetchContacts.rejected](state, { payload }) {
      handleRejected(state, payload);
    },

    [addContact.pending](state) {
      handlePending(state);
    },
    [addContact.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.error = null;
      state.items.push(payload);
      successNotify(payload);
    },
    [addContact.rejected](state, { payload }) {
      handleRejected(state, payload);
    },

    [deleteContact.pending](state) {
      state.isDeleting = true;
    },
    [deleteContact.fulfilled](state, { payload: { id } }) {
      state.isLoading = false;
      state.isDeleting = false;
      state.error = null;
      state.items = state.items.filter(item => item.id !== id);
    },
    [deleteContact.rejected](state, { payload }) {
      state.isDeleting = false;
      state.error = payload;
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
