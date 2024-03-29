import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import "./index.css"
import reportWebVitals from './reportWebVitals';

const root = document.getElementById('root'); // Get the container element

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  root // Pass the container element as the second argument
);

reportWebVitals();