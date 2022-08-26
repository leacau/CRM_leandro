import { CUSTOMERS } from './../../constants/data/customers';
import { customersTypes } from '../types/index';

const { SELECT_CUSTOMER, FILTERED_CUSTOMERS } = customersTypes

const initialState = {
    customers: CUSTOMERS,
    filteredCustomers: [],
    selected: null,
}

const customerReducer = (state = initialState, action) => {

    switch (action.type) {
        case SELECT_CUSTOMER:
            return {
                ...state,
                selected: state.customers.find(customer => customer.id === action.customerId)
            }
            
        case FILTERED_CUSTOMERS:
            return {
                    ...state,
                    filteredCustomers: state.customers.filter(customer => customer.category === action.categoryId)
            }

        default:
            return state;
    }

}

export default customerReducer;