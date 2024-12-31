import { configureStore } from "@reduxjs/toolkit";
import OrderReducer from './reducers/OrderSlice';

export const store = configureStore({
   reducer:{
      order: OrderReducer,
   }
});