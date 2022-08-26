import { categoryReducer, customerReducer, tasksReducer } from "./reducers/index";
import { combineReducers, createStore } from "redux";

const rootReducer = combineReducers({
  customers: customerReducer,
  category: categoryReducer,
  tasks: tasksReducer,
});

export default createStore(rootReducer);