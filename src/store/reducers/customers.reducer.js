import { CUSTOMERS } from '../../constants/data/customers';
import { customersTypes } from '../types/index';

const { SELECT_CUSTOMER, FILTERED_CUSTOMERS, NEW_CUSTOMERS } = customersTypes;

const initialState = {
  customers: CUSTOMERS,
  newCustomers: [],
  filteredCustomers: [],
  selected: null,
};

const customerReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEW_CUSTOMERS:
      return {
        ...state,
        newCustomers: state.customers.concat(...action.customers),
      };

    case SELECT_CUSTOMER:
      return {
        ...state,
        selected: state.newCustomers.find((customer) => customer.id === action.customerId),
      };

    case FILTERED_CUSTOMERS:
      return {
        ...state,
        filteredCustomers: state.customers.filter((customer) => customer.category === action.categoryId),
      };

    default:
      return state;
  }
};

export default customerReducer;
