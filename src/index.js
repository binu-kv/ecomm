import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { provider } from 'react-redux';

import './index.css';
import App from './App';

import store from './redux/store';


ReactDOM.render(
  <provider store = {store}>
    <React.StrictMode>
      <BrowserRouter>
         <App />
      </BrowserRouter>
    </React.StrictMode>
  </provider>,
  document.getElementById('root')
);
