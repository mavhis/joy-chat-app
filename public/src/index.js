import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKQEyNFf1DSqjaLl77uWl2rAD7lBOAdcU",
  authDomain: "joy-chat-app-b7972.firebaseapp.com",
  databaseURL: "https://joy-chat-app-b7972-default-rtdb.firebaseio.com",
  projectId: "joy-chat-app-b7972",
  storageBucket: "joy-chat-app-b7972.appspot.com",
  messagingSenderId: "1001396987166",
  appId: "1:1001396987166:web:26fe098d724b364f7f950f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
