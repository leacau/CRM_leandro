import {
  addDoc,
  collection,
} from 'firebase/firestore';
import { getCustomers, insertCustomer } from '../db';

import { CUSTOMERS } from '../constants/data/customers';
import Customer from '../models/customer';
import { URL_GEOCODING } from '../utils/maps';
import { createSlice } from '@reduxjs/toolkit';
import { database } from '../constants/firebase';

const initialState = {
  customers: CUSTOMERS,
};

const customerSlice = createSlice({
  name: 'customer',
  initialState,
  reducers: {
    addCustomer: (state, action) => {
      const newCustomer = new Customer(
        action.payload.id.toString(),
        action.payload.category,
        action.payload.name,
        action.payload.lastname,
        action.payload.phone,
        action.payload.email,
        action.payload.image,
        action.payload.address,
        action.payload.location,
        action.payload.tasks,
      );
      state.customers.push(newCustomer);
    },
    setCustomers: (state, action) => {
      state.customers = action.payload;
    },
  },
});

export const { addCustomer, setCustomers } = customerSlice.actions;

export const saveCustomer = (category, name, lastname, phone, email, image, location) => async (dispatch) => {
  const response = await fetch(URL_GEOCODING(location?.lat, location?.long));

  if (!response.ok) throw new Error('No se pudo conectar con el servidor');

  const data = await response.json();

  if (!data.results) throw new Error('No se pudo encontrar la dirección');

  const address = data.results[0].formatted_address;

  try {
    const customerToFire = async () => {
      await addDoc(collection(database, 'customers'), {
        category,
        name,
        lastname,
        phone,
        email,
        image,
        address,
        location,
      });
    };
    const result = await insertCustomer(category, name, lastname, phone, email, image, address, location);
    dispatch(addCustomer({
      id: result.insertId,
      category,
      name,
      lastname,
      phone,
      email,
      address,
      image,
      location,
    }));
    customerToFire();
  } catch (error) {
    console.log('error', error);
    throw error;
  }
};

export const loadCustomers = () => async (dispatch) => {
  try {
    const result = await getCustomers();
    dispatch(setCustomers(result?.rows?._array));
  } catch (error) {
    console.warn(error);
    throw error;
  }
};

export default customerSlice.reducer;
