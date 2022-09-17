import { customersTypes } from '../types/index';

const { SELECT_CUSTOMER, FILTERED_CUSTOMERS, NEW_CUSTOMERS } = customersTypes;

export const newCustomer = ([customers]) => ({
  type: NEW_CUSTOMERS,
  customers: [customers],
});

export const selectCustomer = (id) => ({
  type: SELECT_CUSTOMER,
  customerId: id,
});

export const filteredCustomers = (id) => ({
  type: FILTERED_CUSTOMERS,
  categoryId: id,
});
