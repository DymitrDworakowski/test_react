import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("api/contacts");

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e._message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async ({ name, phone, email }, thunkAPI) => {
    try {
      const response = await axios.post("api/contacts", { name, phone, email });
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
      const response = await axios.delete(`api/contacts/${сontactId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const editContact = createAsyncThunk(
  "contacts/editContact",
  async ({ name, phone, email, сontactId }, thunkAPI) => {
    try {
      const response = await axios.put(`api/contacts/${сontactId}`, { name, phone, email });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);