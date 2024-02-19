import axios from "axios";
import {createAsyncThunk} from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://connections-api.herokuapp.com/";


// Утіліта до додавання JWT
const setAuthHeader = (token) => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
}

//Утіліта до видалення JWT
const clearAuthHeader = () => {
    axios.defaults.headers.common.Authorization =""
}

//POST запрос /users/signup

export const register = createAsyncThunk(
    'auth/register',
    async(credentials,thunkAPI) => {
        try {
            const response = await axios.post('/auth/register',credentials);
            // Додає токен до HTTP шапки 
            setAuthHeader(response.data.token);
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

//POST запрос /users/login

export const logIn = createAsyncThunk(
    'auth/login',
    async(credentials,thunkAPI) => {
        try {
            const response = await axios.post('/auth/login',credentials);
            // Додає токен до HTTP шапки 
            setAuthHeader(response.data.token);
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

//POST запрос /users/logout

export const logOut = createAsyncThunk(
    'auth/logout',
    async(_,thunkAPI) => {
        try {
          await axios.post('/users/logout');
            // Очищує токен з HTTP шапки
            clearAuthHeader();
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

//GET запрос /users/current

export const refreshUser = createAsyncThunk(
    'auth/refresh',
    async(_,thunkAPI) => {
        // Читає токен з стейту типу getState()
        const state = thunkAPI.getState();
        const persistedToken = state.auth.token;
        if(persistedToken=== null){
            return thunkAPI.rejectWithValue('No token');
        }
        try{
            setAuthHeader(persistedToken);
            const response = await axios.get('/users/me');
            return response.data;
        }catch(e){
            return thunkAPI.rejectWithValue(e.message);
        }
    }
)