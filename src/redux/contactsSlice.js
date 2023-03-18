// import { nanoid } from 'nanoid';
import { createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from './operations';

const contactsInitialState = {
  items: [],
  isLoading: false,
  error: null,
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

  // reducers: {
  //   addContact: {
  //     reducer(state, { payload }) {
  //       state.items.push(payload);
  //       // return { ...state, items: [...state.items, payload] };
  //     },
  //     prepare(obj) {
  //       return {
  //         payload: {
  //           id: nanoid(),
  //           ...obj,
  //         },
  //       };
  //     },
  //   },
  //   deleteContact(state, { payload }) {
  //     state.items = state.items.filter(item => item.id !== payload);
  //     // return {
  //     //   ...state,
  //     //   items: state.items.filter(item => item.id !== payload),
  //     // };
  //   },
  // },
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
    },
    [addContact.rejected](state, { payload }) {
      handleRejected(state, payload);
    },

    [deleteContact.pending](state) {
      handlePending(state);
    },
    [deleteContact.fulfilled](state, { payload: { id } }) {
      state.isLoading = false;
      state.error = null;
      state.items = state.items.filter(item => item.id !== id);
    },
    [deleteContact.rejected](state, { payload }) {
      handleRejected(state, payload);
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
