import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchItemsByCategory, fetchItemDetails } from '../utils/api';

export const fetchItemsByCategoryAsync = createAsyncThunk(
  'items/fetchByCategory',
  async (category) => {
    return await fetchItemsByCategory(category);
  }
);

export const fetchItemDetailsAsync = createAsyncThunk(
  'items/fetchDetails',
  async (id) => {
    return await fetchItemDetails(id);
  }
);

const itemSlice = createSlice({
  name: 'items',
  initialState: { data: [], details: {}, status: 'idle' },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchItemsByCategoryAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchItemsByCategoryAsync.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchItemsByCategoryAsync.rejected, (state) => {
        state.status = 'failed';
      })
      .addCase(fetchItemDetailsAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchItemDetailsAsync.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.details[action.payload.idMeal] = action.payload;
      })
      .addCase(fetchItemDetailsAsync.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export default itemSlice.reducer;
