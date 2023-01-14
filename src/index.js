import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvx5CerpYQtNGxMWN8K7j1sj0Nc_gGAP4",
  authDomain: "giraucar-e0e48.firebaseapp.com",
  projectId: "giraucar-e0e48",
  storageBucket: "giraucar-e0e48.appspot.com",
  messagingSenderId: "622712619919",
  appId: "1:622712619919:web:676c3acbbe02dfbb9781fa"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);