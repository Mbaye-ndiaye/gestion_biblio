import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Thunk asynchrone pour fetch des membres
export const fetchMembres = createAsyncThunk('membres/fetchMembres', async () => {
    const response = await axios.get(process.env.REACT_APP_API_URL+'membres/');
    return response.data;
});

// Initial State
const initialState = {
    loading: false,
    membres: [],
    error: ''
};

// Slice Redux pour gérer l'état des membres
const membresSlice = createSlice({
    name: 'membres',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchMembres.pending, (state) => {
                state.loading = true;
                state.error = '';
            })
            .addCase(fetchMembres.fulfilled, (state, action) => {
                state.loading = false;
                state.membres = action.payload;
            })
            .addCase(fetchMembres.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default membresSlice.reducer;
