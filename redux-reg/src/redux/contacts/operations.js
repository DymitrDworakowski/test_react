import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/contacts");
      console.log(response.data);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e._message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async ({ name, number }, thunkAPI) => {
    try {
      const response = await axios.post("/contacts", { name, number });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e._message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (сontactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${сontactId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
