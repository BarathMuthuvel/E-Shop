import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from './categorySlice';
import itemReducer from './itemSlice';
import cartReducer from './cartSlice';
import orderReducer from './orderSlice';

const store = configureStore({
  reducer: {
    categories: categoryReducer,
    items: itemReducer,
    cart: cartReducer,
    orders: orderReducer,
  },
});

export default store;