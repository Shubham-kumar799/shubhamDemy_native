// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCwSBL4-5JJHIeFvkFKkot_RzQCwhvA7Kg',
  authDomain: 'shubhamdemy-native.firebaseapp.com',
  projectId: 'shubhamdemy-native',
  storageBucket: 'shubhamdemy-native.appspot.com',
  messagingSenderId: '394353534306',
  appId: '1:394353534306:web:2b40606c7d96ff0927f83b',
  measurementId: 'G-NXXWHX2L36',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth();

export { firebaseApp, firebaseAuth };
