import { createSlice } from '@reduxjs/toolkit';

const orderSlice = createSlice({
  name: 'orders',
  initialState: { list: [] },
  reducers: {
    createOrder: (state, action) => {
      const newOrder = {
        id: Date.now().toString(),
        items: action.payload,
      };
      state.list.push(newOrder);
    },
  },
});

export const { createOrder } = orderSlice.actions;
export default orderSlice.reducer;