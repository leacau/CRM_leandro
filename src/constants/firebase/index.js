import Constants from 'expo-constants';
import { getFirestore } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: Constants.manifest.extra.firebaseConfig.apiKey,
  authDomain: Constants.manifest.extra.firebaseConfig.authDomain,
  databaseURL: Constants.manifest.extra.firebaseConfig.databaseURL,
  projectId: Constants.manifest.extra.firebaseConfig.projectId,
  storageBucket: Constants.manifest.extra.firebaseConfig.storageBucket,
  messagingSenderId: Constants.manifest.extra.firebaseConfig.messagingSenderId,
  appId: Constants.manifest.extra.firebaseConfig.appId,
};

initializeApp(firebaseConfig);
export const database = getFirestore();
