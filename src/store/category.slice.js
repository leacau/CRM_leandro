import { CATEGORIES } from '../constants/data/categories';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: CATEGORIES,
  selected: null,
};

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    selectCategory: (state, action) => {
      const indexCategory = state.categories.findIndex((category) => category.id === action.categoryId);

      if (indexCategory === -1) return state;

      return {
        ...state,
        selected: state.categories[indexCategory],
      };
    },
    filteredCustomers: (state, action) => {
      const indexCategory = state.categories.findIndex((category) => category.id === action.categoryId);

      if (indexCategory === -1) return state;

      return {
        ...state,
        selected: state.categories[indexCategory],
      };
    },

  },

});

export const { selectCategory, filteredCustomers } = categorySlice.actions;

export default categorySlice.reducer;
