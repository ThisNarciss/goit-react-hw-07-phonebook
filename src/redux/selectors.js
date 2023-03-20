const { createSelector } = require('@reduxjs/toolkit');
const { selectContacts } = require('redux/contacts/selectors');
const { selectFilter } = require('redux/filter/selectors');

export const selectFilterContacts = createSelector(
  [selectFilter, selectContacts],

  (filter, contacts) =>
    contacts.filter(item =>
      item.name.toLowerCase().includes(filter.toLowerCase())
    )
);
