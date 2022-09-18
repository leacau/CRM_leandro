import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('customers_sql.db');

export const init = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS customers_sql (id INTEGER PRIMARY KEY NOT NULL, category TEXT NOT NULL, name TEXT NOT NULL, lastname TEXT NOT NULL, phone TEXT NOT NULL, email TEXT NOT NULL, address TEXT NOT NULL, image TEXT NOT NULL, location TEXT NOT NULL);',
        [],
        () => resolve(),
        (_, err) => reject(err),
      );
    });
  });
  return promise;
};

export const insertCustomer = (
  category,
  name,
  lastname,
  phone,
  email,
  image,
  address,
  location,
) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'INSERT INTO customers_sql (category, name, lastname, phone, email, address, image, location) VALUES (?, ?, ?, ?, ?, ?, ?, ?);',
        [category, name, lastname, phone, email, address, image, JSON.stringify(location)],
        (_, result) => {
          console.warn('INsERT', result);
          resolve(result);
        },
        (_, err) => {
          console.warn('INsERT', err);
          reject(err);
        },
      );
    });
  });
  return promise;
};

export const getCustomers = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM customers_sql',
        [],
        (_, result) => {
          resolve(result);
        },
        (_, err) => {
          reject(err);
        },
      );
    });
  });
  return promise;
};
