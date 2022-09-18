import categoryReducer from './category.slice';
import { configureStore } from '@reduxjs/toolkit';
import customerReducer from './customer.slice';

export const store = configureStore({
  reducer: {
    customer: customerReducer,
    category: categoryReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
});
