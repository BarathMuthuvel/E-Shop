import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchItemDetails } from '../utils/api';

export const fetchItemDetailsAsync = createAsyncThunk(
  'items/fetchDetails',
  async (id) => {
    const details = await fetchItemDetails(id);
    return details;
  }
);

const cartSlice = createSlice({
  name: 'cart',
  initialState: { items: [], itemDetails: {} },
  reducers: {
    addToCart: (state, action) => {
      const { id, quantity } = action.payload;
      const existingItem = state.items.find(item => item.id === id);
      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.items.push({ id, quantity });
      }
    },
    updateCartItem: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.items.find(item => item.id === id);
      if (item) {
        item.quantity = Math.max(0, quantity);
        if (item.quantity === 0) {
          state.items = state.items.filter(item => item.id !== id);
        }
      }
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchItemDetailsAsync.fulfilled, (state, action) => {
        const { idMeal } = action.payload;
        state.itemDetails[idMeal] = action.payload;
      });
  }
});

export const { addToCart, updateCartItem, removeFromCart, clearCart } = cartSlice.actions;

export const addToCartAndFetchDetails = (id, quantity) => async (dispatch, getState) => {
  dispatch(addToCart({ id, quantity }));
  const state = getState();
  const itemDetails = state.cart.itemDetails[id];
  if (!itemDetails) {
    dispatch(fetchItemDetailsAsync(id));
  }
};

export default cartSlice.reducer;
