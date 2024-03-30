
import { createSlice , createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  data: [],
  isLoading: false,
  error: null,
};

export const fetchData = createAsyncThunk(
  'dataFetch/fetchData',
 async (page = 1) => {
  const response = await axios.get(`https://reqres.in/api/users/?page=${page}`);
  return response.data;
}
);

export const dataFetchSlice = createSlice({
  name: 'dataFetch',
  initialState,
  reducers: {},
  extraReducers: (builder)=>{
    builder
      .addCase(fetchData.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.data = action.payload.data;
        state.isLoading = false;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  }
});

export default dataFetchSlice.reducer;