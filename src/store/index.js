import { applyMiddleware, combineReducers, createStore } from 'redux';
import { categoryReducer, customerReducer, tasksReducer } from './reducers/index';

import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  customers: customerReducer,
  category: categoryReducer,
  tasks: tasksReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk));
