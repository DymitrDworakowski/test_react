import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = (state) => state.contacts.items;

export const selectIsLoading = (state) => state.contacts.isLoading;

export const selectError = (state) => state.contacts.error;

export const selectFilter = (state) => state.filter;

export const selectFilterContacts = createSelector(
  [selectContacts, selectFilter],
  (items, filter) => {
    // Перевірка, чи contacts є масивом
    if (!Array.isArray(items)) {
      // Якщо contacts не є масивом, поверніть порожній масив
      return [];
    }

    // Фільтрація контактів
    const filteredContacts = items.filter(
      (contact) =>
        contact.name.toLowerCase().includes(filter.toLowerCase()) ||
        contact.phone.toLowerCase().includes(filter.toLowerCase()) ||
        contact.email.toLowerCase().includes(filter.toLowerCase())
    );

    return filteredContacts;
  }
);
