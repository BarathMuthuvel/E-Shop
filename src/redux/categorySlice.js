import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchCategories } from '../utils/api';

export const fetchCategoriesAsync = createAsyncThunk(
  'categories/fetchCategories',
  async () => {
    return await fetchCategories();
  }
);

const categorySlice = createSlice({
  name: 'categories',
  initialState: { data: [], status: 'idle' },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategoriesAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCategoriesAsync.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchCategoriesAsync.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export default categorySlice.reducer;