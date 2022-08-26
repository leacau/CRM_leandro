import { customersTypes } from "../types/index";

const { SELECT_CUSTOMER, FILTERED_CUSTOMERS } = customersTypes;

export const selectCustomer = (id) => ({
  type: SELECT_CUSTOMER,
  customerId: id,
});

export const filteredCustomers = (id) => ({
  type: FILTERED_CUSTOMERS,
  categoryId: id,
});