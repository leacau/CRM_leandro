import { CUSTOMERS } from './../../constants/data/customers';
import { tasksTypes } from "../types/index";

const { SELECT_TASK, FILTERED_TASKS } = tasksTypes;

const initialState = {
    customers: CUSTOMERS,
    tasks: CUSTOMERS.map(customer => customer.tasks),
    filteredTasks: [],
    selected: null,
}

const tasksReducer = (state = initialState, action) => {

    switch (action.type) {
        case SELECT_TASK:
            return {
                ...state,
                selected: state.tasks.find(task => task.id === action.taskId)
            }
            
        case FILTERED_TASKS:
            return {
                    ...state,
                    filteredTasks: state.tasks.filter(task => task.status !== '')
            }

        default:
            return state;
    }

}

export default tasksReducer;