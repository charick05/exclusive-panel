import { createSlice } from "@reduxjs/toolkit";
import { stateManagement } from "../../routes/orderManagement/stateManagement";

const OrderSlice = createSlice({
   name: 'order',
   initialState: {
      stateManagement,
      status: 'All'
   },
   reducers: {
      statusChange: (state, action) => {
         state.status = action.payload;
      },
   }
   },
);
export const {statusChange} = OrderSlice.actions;
export default OrderSlice.reducer;