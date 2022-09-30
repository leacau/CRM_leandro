import categoryReducer from './category.slice';
import { configureStore } from '@reduxjs/toolkit';
import customerReducer from './customer.slice';

export const store = configureStore({
  reducer: {
    category: categoryReducer,
    customer: customerReducer,

  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
});
