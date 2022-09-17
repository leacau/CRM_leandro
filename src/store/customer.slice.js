import { CUSTOMERS } from '../constants/data/customers';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  customers: CUSTOMERS,
};

const customerSlice = createSlice({
  name: 'customer',
  initialState,
  reducers: {
    addCustomer: (state, action) => {
      const newCustomer = new Customer(Day.now(), action.payload.category, action.payload.name, action.payload.lastname, action.payload.phone, action.payload.email);
      state.customers.push(newCustomer);
    },
  },

});

export const { addCustomer } = customerSlice.actions;

export default customerSlice.reducer;
