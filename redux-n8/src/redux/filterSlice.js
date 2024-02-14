import { createSlice } from "@reduxjs/toolkit";

const filterInitialState = ""; // Додай поле для зберігання значення фільтра;

const filterSlice = createSlice({
  name: "filter",
  initialState: filterInitialState,
  reducers: {
    findContact: (state, action) => {
      return {
        ...state,
        filter: action.payload, // Оновлюємо значення фільтра відповідно до переданого значення
      };
    },
  },
});

export const { findContact } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
